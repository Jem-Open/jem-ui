# Contributing to JEM Design System

Thanks for your interest in contributing! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Start Storybook: `npm run storybook`

## Development Workflow

1. Create a feature branch from `main`
2. Make your changes following existing patterns in `components/` and `stories/`
3. Ensure lint passes: `npm run lint`
4. Test your changes in Storybook
5. Open a Pull Request against `main`

## Component Guidelines

- Follow atomic design principles (`atoms/`, `ui/`)
- Use **Class Variance Authority (CVA)** for type-safe variants
- Use `cn()` utility for class merging
- Support `asChild` prop via `@radix-ui/react-slot` for polymorphic components
- Forward refs with `React.forwardRef`
- Add corresponding stories in `stories/`

## Commit Messages

Write clear, concise commit messages that describe the change. Use conventional prefixes where appropriate (e.g., `fix:`, `feat:`, `docs:`).

## Pull Requests

- Keep PRs focused on a single change
- Include a description of what changed and why
- Ensure CI checks pass before requesting review

## Releasing

Every release needs a `CHANGELOG.md` section and a matching `package.json` bump, committed together
as `chore(release): X.Y.Z`. The tag push publishes to npm and cuts the GitHub Release from your
CHANGELOG section — see [Publishing](./README.md#publishing) for the commands.

### Choosing the version number

Read it off the CHANGELOG section you just wrote:

| CHANGELOG heading | Bump | Why |
| --- | --- | --- |
| `### Fixed` | **patch** — `0.7.1 → 0.7.2` | A consumer on `^0.7.1` picks this up automatically, which is safe only if their screens look the same afterwards. |
| `### Added` | **minor** — `0.7.2 → 0.8.0` | New surface area. Nothing breaks, but consumers should adopt it deliberately. |
| `### Changed` | **minor** — `0.7.2 → 0.8.0` | Something that already shipped now looks or behaves differently. |
| `### Removed` | **minor** — `0.7.2 → 0.8.0` | Pre-1.0, this is as loud as we can be short of a major. |

**A visual change is a breaking change**, even though nothing fails to compile. This is the rule
that matters most here and the easiest one to get wrong, because a restyle needs no API change to
break a consumer's page.

The reason the split falls at minor rather than major: consumers depend on `^0.7.x`, which resolves
`>=0.7.1 <0.8.0`. **A patch reaches them on their next `pnpm update` with nothing to approve; a
minor does not.** So the question to ask isn't "how big is this change" — it's *"if this arrived in
someone's app unannounced and unreviewed, would that be fine?"* If no, it's a minor.

Worked example — `0.7.2` dropped the border and shadow from `Card`'s `solid` variant. It was
committed as `fix(card):` and released as a patch, but its CHANGELOG entry sits under `### Changed`,
because every solid card in every consumer changed appearance. Under this rule it should have been
`0.8.0`. It stays published as `0.7.2` — republishing under a different number would break anyone
who has already installed it — but don't use it as the precedent.

## Reporting Issues

Open an issue on GitHub with:
- A clear description of the problem
- Steps to reproduce (if applicable)
- Expected vs actual behavior

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
