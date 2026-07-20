export const houses = Object.freeze({
  arryn: { name: "House Arryn", seat: "The Eyrie", region: "The Vale" },
  baratheon: { name: "House Baratheon", seat: "Storm's End", region: "The Stormlands" },
  greyjoy: { name: "House Greyjoy", seat: "Pyke", region: "The Iron Islands" },
  hightower: { name: "House Hightower", seat: "Oldtown", region: "The Reach" },
  stark: { name: "House Stark", seat: "Winterfell", region: "The North" },
  lannister: { name: "House Lannister", seat: "Casterly Rock", region: "The Westerlands" },
  martell: { name: "House Martell", seat: "Sunspear", region: "Dorne" },
  tully: { name: "House Tully", seat: "Riverrun", region: "The Riverlands" },
  targaryen: { name: "House Targaryen", seat: "Dragonstone", region: "Blackwater Bay" },
  tyrell: { name: "House Tyrell", seat: "Highgarden", region: "The Reach" }
});

export function findHouseBySeat(seat) {
  return Object.values(houses).find(
    (house) => house.seat.toLowerCase() === seat.toLowerCase()
  );
}

export function findHouseByName(name) {
  return Object.values(houses).find(
    (house) => house.name.toLowerCase() === name.toLowerCase()
  );
}
