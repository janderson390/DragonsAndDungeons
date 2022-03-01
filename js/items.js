// Base class for all items
class Item {
    constructor(name, description, value) {
        this.name = name;
        this.description = description;
        this.value = value;
    }
}

class Weapon extends Item {
    constructor(name, description, value, damage) {
        super(name, description, value);
        this.damage = damage;
    }
}

class Consumable extends Item {
    constructor(name, description, value, effect) {
        super(name, description, value);
        this.effect = effect;
    }
}