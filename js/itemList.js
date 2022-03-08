let item = { 
    woodenStick: {
        name: "Wooden Stick",
        desc: "A small wooden stick, blunt on both ends.",
        value: 0
    },
    smallRock: {
        name: "Small Rock",
        desc: "A small rock.",
        value: 0
    },
    femurBone: {
        name: "Femur Bone",
        desc: "A femur from a human skeleton.",
        value: 1
    }
}


let questItem = {
    rustyKey: {
        name: "Rusty Key",
        desc: "Could be used to unlock a door somewhere.",
        value: 0
    }
}


let weapon = {
    rustySword: {
        name: "Rusty Sword",
        desc: "An old rusty sword. The blade is chipped.",
        value: 3,
        damage: 2
    },
    wornPickaxe: {
        name: "Worn Pickaxe",
        desc: "Rusty, dull, and has the faint smell of rotting flesh.",
        value: 3,
        damage: 2
    }
}


let consumable = {
    // SOLIDS
    apple: {
        name: "Apple",
        desc: "A ripe, juicy apple.",
        value: 2,
        effect: 5,
        type: foodType.Solid
    },
    rottenFlesh: {
        name: "Rotten Flesh",
        desc: "Decaying, almost dried flesh from a corpse.",
        value: 0,
        effect: 1,
        type: foodType.Solid
    },
    deadSpider: {
        name: "Dead Spider",
        desc: "A dead spider, looks edible.",
        value: 1,
        effect: 2,
        type: foodType.Solid
    },

    // LIQUIDS
    healthPotion: {
        name: "Health Potion",
        desc: "A liquid that magically does things.",
        value: 5,
        effect: 10,
        type: foodType.Liquid
    },
    waterVial: {
        name: "Water Vial",
        desc: "A vial filled with water.",
        value: 2,
        effect: 5,
        type: foodType.Liquid
    }
}