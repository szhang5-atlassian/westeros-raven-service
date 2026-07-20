import { findHouseBySeat } from "./houses.js";
import { describeRoute, findShortestRoute } from "./routes.js";

export const messageProfiles = Object.freeze({
  routine: {
    label: "Routine Correspondence",
    baseMinutesPerLeg: 50,
    seal: "grey wax",
    clearance: "rookery steward"
  },
  royal: {
    label: "Royal Decree",
    baseMinutesPerLeg: 35,
    seal: "red wax and crowned stag",
    clearance: "small council"
  },
  wartime: {
    label: "Wartime Orders",
    baseMinutesPerLeg: 25,
    seal: "black wax and direwolf cord",
    clearance: "war tent"
  },
  secret: {
    label: "Whispers and Spies",
    baseMinutesPerLeg: 65,
    seal: "no visible seal",
    clearance: "master of whisperers"
  }
});

const weatherPenalties = Object.freeze({
  clear: 0,
  windy: 15,
  storm: 40,
  winter: 60
});

function toEtaHours(totalMinutes) {
  return Number((totalMinutes / 60).toFixed(1));
}

function inferRisk(priority, weather, legs) {
  if (weather === "winter" || weather === "storm") return "high";
  if (priority === "secret" || legs >= 3) return "medium";
  return "low";
}

export function planDispatch({
  origin,
  destination,
  priority = "routine",
  weather = "clear"
}) {
  const profile = messageProfiles[priority];

  if (!profile) {
    throw new Error("Unknown message priority");
  }

  if (!(weather in weatherPenalties)) {
    throw new Error("Unknown weather pattern");
  }

  const route = findShortestRoute(origin, destination);
  const destinationHouse = findHouseBySeat(destination);
  const legs = Math.max(route.length - 1, 0);
  const totalMinutes = legs * profile.baseMinutesPerLeg + weatherPenalties[weather];

  return {
    origin,
    destination,
    destinationHouse: destinationHouse?.name ?? null,
    priority,
    priorityLabel: profile.label,
    weather,
    route,
    routeSummary: describeRoute(route),
    legs,
    etaHours: toEtaHours(totalMinutes),
    seal: profile.seal,
    clearance: profile.clearance,
    riskLevel: inferRisk(priority, weather, legs)
  };
}
