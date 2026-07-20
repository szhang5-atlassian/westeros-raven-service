const roads = Object.freeze({
  "Castle Black": ["Winterfell"],
  Winterfell: ["Castle Black", "The Eyrie", "Riverrun"],
  "The Eyrie": ["Winterfell", "Riverrun", "King's Landing"],
  Riverrun: ["Winterfell", "The Eyrie", "Pyke", "Casterly Rock", "King's Landing"],
  Pyke: ["Riverrun", "Casterly Rock"],
  "Casterly Rock": ["Riverrun", "Pyke", "Highgarden"],
  "King's Landing": ["The Eyrie", "Riverrun", "Dragonstone", "Highgarden", "Storm's End"],
  Dragonstone: ["King's Landing", "Storm's End"],
  Highgarden: ["Casterly Rock", "King's Landing", "Oldtown", "Sunspear"],
  Oldtown: ["Highgarden"],
  "Storm's End": ["King's Landing", "Dragonstone", "Sunspear"],
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
