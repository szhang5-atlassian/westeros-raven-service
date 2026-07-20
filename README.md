# Westeros Raven Service

A tiny, dependency-free JavaScript service for routing fictional ravens between the great houses of Westeros.

> This is a fan-made demo project. It is not affiliated with HBO, Warner Bros., or George R. R. Martin.

## Quick start

```bash
npm test
npm start
```

The service prints a sample route from Winterfell to King's Landing. All names and descriptions are short, original demo data rather than copied story text.

## Project map

- `src/houses.js` — house and seat data
- `src/routes.js` — shortest-route calculation
- `src/index.js` — small command-line demo
- `test/routes.test.js` — route tests

## PM-Friendly GitHub Workflow

One strong demo use case for Cursor plus GitHub is synthesizing technical work into a brief that product managers and non-technical partners can scan in under two minutes.

In this repo, that takes the form of a "Small Council Brief":

- a PR template that starts with user impact rather than implementation details
- a short example brief with status, launch timing, risks, and asks
- a Mermaid diagram that visualizes the rollout path instead of forcing readers through commit history

See:

- `.github/PULL_REQUEST_TEMPLATE.md`
- `docs/small-council-brief.md`

## Roadmap

- Raven priority classes
- Winter weather alerts
- House standings dashboard
- Maester operations guide

