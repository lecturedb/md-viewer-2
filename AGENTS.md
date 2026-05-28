# Repository Guidelines

## Project Structure & Module Organization

This is a small Vite + React + TypeScript application. Runtime source files live in `src/`: `main.tsx` mounts the React app, `App.tsx` contains the top-level component, and `index.css` / `App.css` hold global and component styles. `index.html` is the Vite HTML entry point. Build output is generated in `dist/` and should be treated as disposable. TypeScript and tooling configuration are in `tsconfig*.json`, `vite.config.ts`, and `eslint.config.js`.

## Build, Test, and Development Commands

- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: run TypeScript project checks with `tsc -b`, then create a production build in `dist/`.
- `npm run lint`: run ESLint across the repository, excluding `dist/`.
- `npm run preview`: serve the production build locally for verification.

Use `npm install` to install dependencies from `package-lock.json` before running project scripts.

## Coding Style & Naming Conventions

Write React components in TypeScript using `.tsx` files. Use PascalCase for component names (`MarkdownViewer.tsx`) and camelCase for local variables, functions, and props. Keep imports at the top of each module, with CSS imports near the component or entry file that owns them. The existing code uses two-space indentation, semicolon-free TypeScript, single quotes, and concise functional components. Run `npm run lint` before submitting changes.

## Testing Guidelines

No test framework is currently configured. For now, validate changes with `npm run lint`, `npm run build`, and manual checks through `npm run dev` or `npm run preview`. When adding tests, prefer colocated files such as `src/App.test.tsx` or `src/components/MarkdownViewer.test.tsx`, and document the new test command in `package.json` and this guide.

## Commit & Pull Request Guidelines

This checkout has no local Git history available, so no repository-specific commit convention can be inferred. Use clear, imperative commit messages such as `Add markdown preview layout` or `Fix editor resize behavior`. Pull requests should include a short description of the change, verification steps run, linked issues when applicable, and screenshots or screen recordings for visible UI changes.

## Agent-Specific Instructions

Keep changes narrowly scoped and avoid committing generated `dist/` updates unless the task explicitly requires them. Prefer existing Vite, React, TypeScript, and ESLint patterns over adding new tooling. If introducing dependencies, explain why they are needed and update `package-lock.json` with `npm install`.
