import { findHouseBySeat } from "./houses.js";
import { findShortestRoute } from "./routes.js";
import { renderStandings } from "./standings.js";

function parseArgs(argv) {
  const options = {
    origin: "Winterfell",
    destination: "King's Landing",
    showStandings: false,
    houseLimit: 5
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--origin") options.origin = argv[index + 1];
    if (arg === "--destination") options.destination = argv[index + 1];
    if (arg === "--show-standings") options.showStandings = true;
    if (arg === "--house-limit") options.houseLimit = Number(argv[index + 1] ?? "5");
  }

  return options;
}

const options = parseArgs(process.argv.slice(2));
const route = findShortestRoute(options.origin, options.destination);
const receivingHouse = findHouseBySeat(options.destination);

console.log("=== Raven Operations Board ===");
console.log(`Dispatch: ${options.origin} -> ${options.destination}`);
console.log(`Route: ${route.join(" -> ")}`);

if (receivingHouse) {
  console.log(`Receiving house: ${receivingHouse.name}`);
}

if (options.showStandings) {
  console.log("");
  console.log("House standings");
  console.log(renderStandings(options.houseLimit));
}
