// Every token whose NAME says it colours text must be legible as text.
//
// This is not hypothetical. Until v0.4.3 none of the four below cleared WCAG AA's 4.5:1 against the
// surfaces they pair with — error 4.03:1 on its own tint, warning 3.23:1, success 3.42:1, and
// caption 4.43:1 on plain white. Nothing caught it, because a colour token cannot fail a type check,
// a lint rule or a render test: it is a valid hex that produces a visible pixel. The only way this
// class of defect shows up is if something computes the ratio, so this does.
//
// Consumers paid for the gap. jem-hub hardcoded Tailwind literals at the call site to work around
// these tokens, and when a slice there mechanically adopted them it pushed ~32 sites below AA in a
// single commit — a change that read as a cleanup and shipped as a regression.
//
// A failure here is a real accessibility bug, not a threshold to nudge. Fix the token.

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { test } from "node:test";

const here = dirname(fileURLToPath(import.meta.url));
const css = readFileSync(join(here, "..", "src", "styles.css"), "utf8");

/** WCAG 2.1 AA for normal-size text. Every token below is used at 12–14px. */
const AA_NORMAL_TEXT = 4.5;

function token(name) {
  const match = css.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{3,8})\\s*;`));
  assert.ok(match, `token ${name} not found in src/styles.css`);
  return match[1];
}

function luminance(hex) {
  const raw = hex.replace("#", "");
  const full =
    raw.length === 3
      ? raw
          .split("")
          .map((c) => c + c)
          .join("")
      : raw;
  const channel = (value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  };
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/**
 * Each text token, and every surface it is actually placed on. White is included for all of them
 * because a page's default ground is white — a token that only passes on its own tint is a trap.
 */
const PAIRINGS = [
  { text: "--error-text-label", surfaces: ["#ffffff", "--error-surface-subtle"] },
  { text: "--warning-text-label", surfaces: ["#ffffff", "--warning-surface-subtle"] },
  { text: "--success-text-label", surfaces: ["#ffffff", "--success-surface-subtle"] },
  { text: "--primary-text-label", surfaces: ["#ffffff"] },
  { text: "--secondary-text-label", surfaces: ["#ffffff"] },
  { text: "--greyscale-text-caption", surfaces: ["#ffffff"] },
  { text: "--greyscale-text-body", surfaces: ["#ffffff"] },
  { text: "--greyscale-text-title", surfaces: ["#ffffff"] },
];

for (const { text, surfaces } of PAIRINGS) {
  test(`${text} is legible on every surface it pairs with`, () => {
    const fg = token(text);
    for (const surface of surfaces) {
      const bg = surface.startsWith("#") ? surface : token(surface);
      const ratio = contrast(fg, bg);
      assert.ok(
        ratio >= AA_NORMAL_TEXT,
        `${text} (${fg}) on ${surface} (${bg}) is ${ratio.toFixed(2)}:1, below the ` +
          `${AA_NORMAL_TEXT}:1 AA bar for normal text. Darken the token — do not lower this bar.`,
      );
    }
  });
}

test("the surfaces these tokens sit on are still the ones being tested", () => {
  // A rename or re-value of a paired surface silently changes what the assertions above mean, so
  // pin the pairings' existence rather than trusting the names to stay put.
  for (const { text, surfaces } of PAIRINGS) {
    token(text);
    for (const surface of surfaces) if (!surface.startsWith("#")) token(surface);
  }
});
