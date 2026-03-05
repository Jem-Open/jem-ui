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

## Reporting Issues

Open an issue on GitHub with:
- A clear description of the problem
- Steps to reproduce (if applicable)
- Expected vs actual behavior

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
