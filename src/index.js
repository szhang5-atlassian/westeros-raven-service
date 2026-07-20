import { findShortestRoute } from "./routes.js";

const route = findShortestRoute("Winterfell", "King's Landing");
console.log(`Raven route: ${route.join(" -> ")}`);
