class Character {
  location = {x: 0, y: 0};
  inventory = {};

  // Constructor
  constructor(name, stats) {
    this.name = name;
    this.stats = stats; // Stats will be a dictionary of values containing str, dex, con
  }

  // Getters
  get location() {
    return this.location;
  }

  get inventory() {
    return this.inventory;
  }

  get name() {
    return this.name;
  }

  get stats() {
    return this.stats;
  }

};

// Character test
// let character = new Character("Samuel", {str: 10, dex: 10, con: 10});
// character.location = {x: 1, y: 1};
// character.inventory = {weapon: "sword", potion: "health"};
// console.log(character);