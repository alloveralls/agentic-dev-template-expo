# Stack

- Purpose: record the agreed technology stack for this repository. Fill this out before implementation.

## Languages and runtimes

- Languages: TypeScript for app/tests; JavaScript permitted for tooling scripts
- Runtimes/versions: Node 20 LTS; Expo SDK 54 (React Native 0.81.x, React 19.2)

## Package manager

- Manager: pnpm
- Lockfile and constraints: pnpm-lock.yaml tracked; use `pnpm install --frozen-lockfile` in CI

## Project types and targets

- Project types: Expo-managed React Native app targeting Android, iOS, and Expo Web
- Build/test tooling: Expo CLI + Metro; TypeScript compiler for typecheck; ESLint (eslint-config-expo) for lint; Prettier for formatting; Jest + jest-expo + @testing-library/react-native for unit tests

## Deployment/CI notes

- CI provider: GitHub Actions (Node 20) running lint, format:check, typecheck, and test
- Deployment targets (if any): none yet; local development via `npm run start` with Expo Go

## Additional constraints

- Coding standards or policies to highlight: see policies/coding_standards.md and policies/testing_policy.md; keep quality_gates.md aligned with scripts/CI
