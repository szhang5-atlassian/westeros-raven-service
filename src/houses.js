export const houses = Object.freeze({
  stark: { name: "House Stark", seat: "Winterfell", region: "The North" },
  lannister: { name: "House Lannister", seat: "Casterly Rock", region: "The Westerlands" },
  tyrell: { name: "House Tyrell", seat: "Highgarden", region: "The Reach" },
  martell: { name: "House Martell", seat: "Sunspear", region: "Dorne" },
  arryn: { name: "House Arryn", seat: "The Eyrie", region: "The Vale" },
  tully: { name: "House Tully", seat: "Riverrun", region: "The Riverlands" },
  baratheon: { name: "House Baratheon", seat: "Storm's End", region: "The Stormlands" }
});

export function findHouseBySeat(seat) {
  return Object.values(houses).find(
    (house) => house.seat.toLowerCase() === seat.toLowerCase()
  );
}
