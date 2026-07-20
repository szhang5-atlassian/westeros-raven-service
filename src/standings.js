export const houseStandings = Object.freeze([
  { house: "House Stark", seat: "Winterfell", ravensInFlight: 6, reliability: 98 },
  { house: "House Arryn", seat: "The Eyrie", ravensInFlight: 4, reliability: 96 },
  { house: "House Tully", seat: "Riverrun", ravensInFlight: 5, reliability: 94 },
  { house: "House Lannister", seat: "Casterly Rock", ravensInFlight: 7, reliability: 92 },
  { house: "House Tyrell", seat: "Highgarden", ravensInFlight: 5, reliability: 95 },
  { house: "House Martell", seat: "Sunspear", ravensInFlight: 3, reliability: 91 },
  { house: "House Baratheon", seat: "Storm's End", ravensInFlight: 4, reliability: 89 }
]);

export function renderStandings(limit = 5) {
  return houseStandings
    .slice(0, limit)
    .map(
      ({ house, seat, ravensInFlight, reliability }, index) =>
        `${index + 1}. ${house} (${seat}) - ${ravensInFlight} ravens airborne, ${reliability}% delivery reliability`
    )
    .join("\n");
}
