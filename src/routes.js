const roads = Object.freeze({
  Winterfell: ["The Eyrie", "Riverrun"],
  "The Eyrie": ["Winterfell", "Riverrun", "King's Landing"],
  Riverrun: ["Winterfell", "The Eyrie", "Casterly Rock", "King's Landing"],
  "Casterly Rock": ["Riverrun", "Highgarden"],
  "King's Landing": ["The Eyrie", "Riverrun", "Highgarden", "Storm's End"],
  Highgarden: ["Casterly Rock", "King's Landing", "Sunspear"],
  "Storm's End": ["King's Landing", "Sunspear"],
  Sunspear: ["Highgarden", "Storm's End"]
});

export function findShortestRoute(origin, destination) {
  if (!roads[origin] || !roads[destination]) {
    throw new Error("Unknown rookery");
  }

  const queue = [[origin]];
  const visited = new Set([origin]);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path.at(-1);

    if (current === destination) return path;

    for (const next of roads[current]) {
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([...path, next]);
      }
    }
  }

  return [];
}

export function describeRoute(route) {
  if (!Array.isArray(route) || route.length === 0) {
    return "No raven route available.";
  }

  if (route.length === 1) {
    return `Raven remains at ${route[0]} for a local handoff.`;
  }

  return `Raven hops ${route.length - 1} legs via ${route.join(" -> ")}.`;
}
