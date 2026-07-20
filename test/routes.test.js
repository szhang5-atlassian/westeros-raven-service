import test from "node:test";
import assert from "node:assert/strict";
import { describeRoute, findShortestRoute } from "../src/routes.js";

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

test("reaches Dragonstone from Castle Black through the core network", () => {
  const route = findShortestRoute("Castle Black", "Dragonstone");
  assert.deepEqual(route, [
    "Castle Black",
    "Winterfell",
    "The Eyrie",
    "King's Landing",
    "Dragonstone"
  ]);
});

test("describes multi-leg routes in demo-friendly text", () => {
  const route = ["Winterfell", "Riverrun", "King's Landing"];
  assert.equal(
    describeRoute(route),
    "Raven hops 2 legs via Winterfell -> Riverrun -> King's Landing."
  );
});
