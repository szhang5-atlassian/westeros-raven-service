import { findHouseBySeat } from "./houses.js";
import { describeRoute, findShortestRoute } from "./routes.js";

const origin = "Castle Black";
const destination = "Dragonstone";
const route = findShortestRoute(origin, destination);
const receivingHouse = findHouseBySeat(destination);

console.log("=== Westeros Raven Dispatch ===");
console.log(`From: ${origin}`);
console.log(`To: ${destination}`);
console.log(describeRoute(route));

if (receivingHouse) {
  console.log(`Receiving court: ${receivingHouse.name} of ${receivingHouse.region}`);
}
