  let fighter = {atk: 12, dex: 10, con: 10};
  let ranger = {atk: 10, dex: 12, con: 10};
  let brute = {atk: 10, dex: 10, con: 12};

function createCharacter(name, className) {
  var character = {name: name, stats: className, location: {x: 0, y: 0}};
  return character;
}