import test from "node:test";
import assert from "node:assert/strict";
import { findShortestRoute } from "../src/routes.js";

test("finds a short route from Winterfell to King's Landing", () => {
  const route = findShortestRoute("Winterfell", "King's Landing");
  assert.deepEqual(route, ["Winterfell", "The Eyrie", "King's Landing"]);
});

test("returns the same rookery for a local delivery", () => {
  assert.deepEqual(findShortestRoute("Sunspear", "Sunspear"), ["Sunspear"]);
});

test("rejects an unknown rookery", () => {
  assert.throws(() => findShortestRoute("Braavos", "Winterfell"), /Unknown rookery/);
});
