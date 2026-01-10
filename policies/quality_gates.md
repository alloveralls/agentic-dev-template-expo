# Quality Gates

- Purpose: define concrete commands that must pass before merge. Align these with package scripts and CI.

## Lint

- Command: `pnpm run lint`
- Notes: ESLint via eslint-config-expo; checks .js/.jsx/.ts/.tsx across repo; zero warnings tolerated

## Format

- Command: `pnpm run format:check`
- Notes: Prettier in check mode for CI; use `pnpm run format` locally to apply fixes

## Test

- Command: `pnpm run typecheck`
- Notes: TypeScript strict mode; keep tsconfig.json aligned with Expo defaults

- Command: `pnpm test`
- Notes: Jest + jest-expo; add @testing-library/react-native for component tests; extend suites for integration as needed

## Failure handling

- Policy: Fix and rerun required before merge; waivers need human maintainer approval and must be documented
- Reporting: Record commands run and results in PR description; CI logs serve as evidence
