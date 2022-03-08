// Base class for all items
class Item {
    constructor(itemData) {
        this.name = itemData.name;
        this.description = itemData.description;
        this.value = itemData.value;
    }
}

class Weapon extends Item {
    constructor(itemData) {
        super(itemData);
        this.damage = itemData.damage;
    }
}

class Consumable extends Item {
    constructor(itemData) {
        super(itemData);
        this.effect = itemData.effect;
        this.type = itemData.type;
    }
}