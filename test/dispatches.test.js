import test from "node:test";
import assert from "node:assert/strict";
import { messageProfiles, planDispatch } from "../src/dispatches.js";

test("exposes message profiles for demo screens", () => {
  assert.deepEqual(Object.keys(messageProfiles), [
    "routine",
    "royal",
    "wartime",
    "secret"
  ]);
});

test("plans a royal dispatch with route, eta, and receiving house", () => {
  const dispatch = planDispatch({
    origin: "Winterfell",
    destination: "Casterly Rock",
    priority: "royal",
    weather: "clear"
  });

  assert.deepEqual(dispatch.route, ["Winterfell", "Riverrun", "Casterly Rock"]);
  assert.equal(dispatch.destinationHouse, "House Lannister");
  assert.equal(dispatch.etaHours, 1.2);
  assert.equal(dispatch.riskLevel, "low");
  assert.match(dispatch.routeSummary, /Raven hops 2 legs/);
});

test("marks harsher weather as high risk", () => {
  const dispatch = planDispatch({
    origin: "Sunspear",
    destination: "Winterfell",
    priority: "secret",
    weather: "winter"
  });

  assert.equal(dispatch.weather, "winter");
  assert.equal(dispatch.riskLevel, "high");
  assert.equal(dispatch.etaHours, 5.3);
});

test("rejects unsupported priorities", () => {
  assert.throws(
    () => planDispatch({ origin: "Winterfell", destination: "Riverrun", priority: "dragonfire" }),
    /Unknown message priority/
  );
});

test("rejects unsupported weather patterns", () => {
  assert.throws(
    () => planDispatch({ origin: "Winterfell", destination: "Riverrun", weather: "fog of war" }),
    /Unknown weather pattern/
  );
});
