import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { renderStandings } from "../src/standings.js";

test("renders a short standings table for the operations board", () => {
  const standings = renderStandings(3);
  assert.match(standings, /^1\. House Stark \(Winterfell\)/);
  assert.match(standings, /3\. House Tully \(Riverrun\)/);
});

test("supports CLI flags for route and standings output", () => {
  const output = execFileSync("node", [
    "src/index.js",
    "--origin",
    "Sunspear",
    "--destination",
    "Winterfell",
    "--show-standings",
    "--house-limit",
    "2"
  ], {
    cwd: process.cwd(),
    encoding: "utf8"
  });

  assert.match(output, /=== Raven Operations Board ===/);
  assert.match(output, /Dispatch: Sunspear -> Winterfell/);
  assert.match(output, /House standings/);
  assert.match(output, /2\. House Arryn \(The Eyrie\)/);
});
