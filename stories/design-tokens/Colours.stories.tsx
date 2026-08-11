import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * The colour palette, and the one place the Figma↔code naming difference is written down.
 *
 * Adapted from the equivalent page in `@jem2.0/ui` (jemos-product `packages/ui/stories/Colors.stories.tsx`)
 * rather than written fresh, so the two read the same while both exist. Two deliberate differences:
 * each hue declares its OWN steps, because the ramps are no longer all 50–900; and the mapping table
 * below exists at all.
 */
const meta = {
  title: "Design Tokens/Colours",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Swatches read the CSS variables directly rather than Tailwind classes, so a token renders " +
          "here even if no component has used it yet — this page is the token source of truth.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

function Swatch({ step, cssVar, isNew }: { step: string; cssVar: string; isNew?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-14 w-full rounded-lg border border-black/5"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <span className="text-xs text-greyscale-text-caption">
        {step}
        {isNew ? <span className="ml-1 font-semibold text-secondary-pink-900">new</span> : null}
      </span>
    </div>
  );
}

/** Steps are per-hue: pink now runs past 900, blue starts before 50. */
const HUES: { title: string; prefix: string; steps: number[]; added?: number[] }[] = [
  { title: "Primary — Navy", prefix: "navy", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], added: [950] },
  {
    title: "Secondary — Pink",
    prefix: "pink",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950, 1000],
    added: [950, 1000],
  },
  { title: "Blue", prefix: "blue", steps: [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900], added: [25] },
  { title: "Green", prefix: "green", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { title: "Red", prefix: "red", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { title: "Yellow", prefix: "yellow", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { title: "Purple", prefix: "purple", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { title: "Lime", prefix: "lime", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { title: "Neutral", prefix: "neutral", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
  { title: "Slate", prefix: "slate", steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] },
];

export const Palette: Story = {
  render: () => (
    <div className="flex max-w-5xl flex-col gap-8 p-6">
      {HUES.map((h) => (
        <section key={h.prefix} className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-greyscale-text-title">{h.title}</h3>
          <div className="grid grid-cols-6 gap-3 sm:grid-cols-12">
            {h.steps.map((s) => (
              <Swatch
                key={s}
                step={String(s)}
                cssVar={`--${h.prefix}-${s}`}
                isNew={h.added?.includes(s)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

/**
 * Why this story exists: the darker pinks are not decoration, they close a real gap.
 *
 * The pink ramp is a TINT ramp that ended at the brand colour, so a pink surface had nothing darker to
 * hover or press to. `--pink-1000` is the first pink that carries white text at AA.
 */
export const PinkStatesAndContrast: Story = {
  name: "Pink — hover/pressed states",
  render: () => {
    const rows: { token: string; cssVar: string; ratio: string; verdict: string }[] = [
      { token: "--pink-900 (brand)", cssVar: "--pink-900", ratio: "2.77:1", verdict: "fails AA — never white text" },
      { token: "--pink-950", cssVar: "--pink-950", ratio: "3.76:1", verdict: "large text / surfaces only" },
      { token: "--pink-1000", cssVar: "--pink-1000", ratio: "5.13:1", verdict: "passes AA with white text" },
    ];
    return (
      <div className="flex max-w-2xl flex-col gap-4 p-6">
        {rows.map((r) => (
          <div key={r.token} className="flex items-center gap-4">
            <div
              className="flex h-12 w-40 shrink-0 items-center justify-center rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: `var(${r.cssVar})` }}
            >
              White text
            </div>
            <div className="flex flex-col">
              <code className="text-xs text-greyscale-text-title">{r.token}</code>
              <span className="text-xs text-greyscale-text-caption">
                {r.ratio} — {r.verdict}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

/**
 * The naming difference between Figma and this package, in the one place people will look.
 *
 * Figma's 2.0 colour page numbers each family 100–600; this package uses 50–900 ramps. The brand pink is
 * `Pink-400` there and `--pink-900` here. Renumbering would break every compiled component and hundreds
 * of consumer call sites for no visual gain, so the names stay and the difference is documented instead.
 */
export const FigmaNameMapping: Story = {
  name: "Figma ↔ code names",
  render: () => {
    const rows: [string, string, string][] = [
      ["Pink-100", "#fff0f2", "--pink-50"],
      ["Pink-200", "#ffccd4", "≈ --pink-200 / --pink-300"],
      ["Pink-300", "#ff93a3", "≈ --pink-600 / --pink-700"],
      ["Pink-400", "#ff697f", "--pink-900  (the brand pink)"],
      ["Pink-500", "#e1506b", "--pink-950  (added)"],
      ["Pink-600", "#c43759", "--pink-1000 (added)"],
      ["Navy-100", "#265373", "≈ --navy-600 / --navy-700 (more saturated)"],
      ["Navy-200", "#0f3957", "≈ --navy-700 / --navy-800 (more saturated)"],
      ["Navy-300", "#051d2e", "--navy-950 (added)"],
      ["Grey-100", "#f7f7f7", "--slate-50"],
      ["Grey-200", "#e2e2e2", "≈ --neutral-200 (#e0e0e0)"],
      ["Grey-500", "#838383", "≈ --neutral-400 / --neutral-500"],
      ["Green-100", "#d8ffd6", "≈ --green-50 / --green-100"],
      ["Green-400", "#39cc2e", "≈ --green-400 (different hue)"],
      ["Green-800", "#227a1b", "≈ --green-600 / --green-700"],
      ["Blue-100", "#f0f5ff", "--blue-25 (added)"],
      ["Blue-200", "#d3dff8", "≈ --blue-100 / --blue-200"],
      ["Blue-300", "#95afe8", "≈ --blue-300 / --blue-400"],
      ["Black", "#000000", "--neutral-black"],
      ["White", "#ffffff", "--neutral-white"],
    ];
    return (
      <div className="max-w-3xl p-6">
        <p className="mb-4 text-sm text-greyscale-text-body">
          Four values were added because they sit outside the existing ramps. The rest are alternative
          hues at positions the ramps already fill, so they map to the nearest existing token rather
          than being duplicated.
        </p>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-greyscale-border">
              <th className="py-2 font-semibold text-greyscale-text-title">Figma</th>
              <th className="py-2 font-semibold text-greyscale-text-title">Value</th>
              <th className="py-2 font-semibold text-greyscale-text-title">This package</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([figma, value, token]) => (
              <tr key={figma} className="border-b border-greyscale-border/50">
                <td className="py-2 text-greyscale-text-body">{figma}</td>
                <td className="py-2">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block size-4 rounded border border-black/10"
                      style={{ backgroundColor: value }}
                    />
                    <code className="text-xs text-greyscale-text-caption">{value}</code>
                  </span>
                </td>
                <td className="py-2">
                  <code className="text-xs text-greyscale-text-title">{token}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};
