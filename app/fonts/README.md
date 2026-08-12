# Fonts in this directory

These exist **only so this repo's Storybook renders the real typefaces**. They are not part of the
published package — `package.json`'s `files` is `["dist", "src/styles.css"]`, so nothing here ships
to npm. The library names families in `--font-family-heading` / `--font-family-body` and leaves
loading to the consumer; jem-hub self-hosts both through `next/font`.

Without them Storybook fell back to `system-ui` and showed reviewers a typographic pairing the
product does not use — while a story labelled its specimen with a font that was not on screen.

## Satoshi-Variable.woff2 — display / headings

Fontshare Free Licence; the full EULA is alongside it in `LICENSE-Satoshi-Fontshare-FFL.txt`, copied
from jem-hub together with the font.

One **variable** file covers the 300–900 axis. The statics are deliberately not used: Satoshi ships
no static 600, and semibold is the most-used weight across the product, so statics would faux-bold
every one of those call sites.

## Inter-Variable-latin.woff2 — body / running text

**SIL Open Font License 1.1.** The full OFL text is NOT yet in this directory and should be added
before this repo is treated as a redistribution source. The OFL permits redistribution provided the
licence travels with the font, so the missing piece is the file, not the permission.

This is the latin variable subset `next/font/google` already downloads for jem-hub, taken from that
build output so Storybook serves the same bytes the product does rather than a second copy of Inter
from somewhere else. It is self-hosted because a Google Fonts `@import` failed: the face registered
and then errored, which reads as loaded while leaving the fallback in place — the specimen measured
573.2px either way, exactly the system stack.

## If you add another

Put its licence beside it in the same commit, and load it from `app/globals.css` rather than
`src/styles.css` — the shipped sheet must not force a font onto a consuming app.
