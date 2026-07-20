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
- `src/dispatches.js` — priority-aware dispatch planning
- `src/routes.js` — shortest-route calculation
- `src/index.js` — small command-line demo
- `test/dispatches.test.js` — dispatch planning tests
- `test/routes.test.js` — route tests

## Roadmap

- Winter weather alerts
- House standings dashboard
- Maester operations guide

