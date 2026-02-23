# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a JavaScript course repository (`fullstack-development-201`) used for learning fullstack development concepts. It contains standalone JS challenge files, lecture practice files, and a Docker-based Node.js development environment. The primary language is JavaScript (Node.js 20).

## Commands

### Run the app
```
npm start
```
This runs `node app.js` (the entry point defined in `package.json`).

### Run a specific challenge or script
```
node challenge3.js [args]
```
Some challenges accept CLI arguments via `process.argv` (e.g., `node challenge3.js 36` for Celsius input, `node challenge4.js 1000 200 300 150` for budget args).

### Docker development environment
```
docker compose up --build
```
Builds and starts a Node 20 Alpine container with the project mounted at `/app`. The container opens an interactive shell (`sh`) with port 3001 exposed.

### Browser-based challenges
Open `index.html` directly in a browser. It loads `challenge5.js` via a `<script>` tag. Some challenges use `prompt()` for browser input.

## Architecture

- **Root JS files** (`app.js`, `challenge3.js`, `challenge4.js`, `challenge5.js`) — Standalone scripts demonstrating JavaScript concepts (hoisting, `var`/`let`/`const`, callbacks, prototypes, IIFEs). Each file is self-contained.
- **`lecture_4/`** — Practice files for lecture 4 (conditionals, control flow).
- **`execution_context.txt`** — Course lecture notes (in Uzbek) covering JavaScript execution model: execution contexts, call stack, event loop, hoisting, scope.
- **`docker/Dockerfile`** + **`docker-compose.yml`** — Containerized Node.js 20 environment for development.
- **`index.html`** + **`style.css`** — Minimal HTML page used to run browser-based JS challenges.

## Branch Workflow

Each student works on their own named branch (e.g., `Muhammaddiyor-Shodiev`). The `main` branch contains the base course material.
