// variables that hold description of travel blockers
var blockade = "There is rubble blocking this way."
var wall = "There is a wall this way."
var lockedDoor = "The door is locked."

// Room structure
class Room {
    constructor(roomName, description,north, south, east, west) {
        this.roomName = roomName;
        this.description = description;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.inventory = new Inventory();
    }
}

// Should we add placeholder for an item that could be in the rooms? If there is an item place it otherwise it can be null or the description can be "no item"
// Create the rooms in the game
// follows structure of (Room Name, Room Description, N, S, E, W)
function generateRooms() {

    // FIRST FLOOR
    startingCell = new Room("Starting Cell","a dust-covered cell, with skeletons all around.", "cavern", wall, wall, wall);
    startingCell.inventory.addItem(new Item(item.femurBone));

    cavern = new Room("Cavern", "an open cavern with markings all over the walls.", blockade, "mine", "storage", "hallway");
    cavern.inventory.addItem(new Consumable(consumable.apple));

    // South
    mine = new Room("Mine", "an abandoned mine with rotting corpses and worn pickaxes on the floor.", "cavern", wall, wall, wall);
    mine.inventory.addItem(new Weapon(weapon.wornPickaxe));
    mine.inventory.addItem(new Item(item.smallRock));

    // West
    hallway = new Room("Hallway", "a narrow hallway very little light to see.", wall, wall, "cavern", "cellar");

    //TODO: replace lockedDoor with "stairs" if key is in inventory
    cellar = new Room("Cellar", "an open cellar with cobwebs all around and bare shelves.", lockedDoor, wall, "hallway", wall);
    cellar.inventory.addItem(new Consumable(consumable.deadSpider));

    stairs = new Room("Stairs", "a dark brick stairwell with the way up to the east.", wall, wall, "next room", wall)

    // East
    // TODO: add ability to get key from this room by searching
    storage = new Room("Storage", "a storage room with crates of supplies.", wall, wall, wall, "cavern");
    storage.inventory.addItem(new Item(questItem.rustyKey)); // This is the key


    // SECOND FLOOR


    // THIRD FLOOR
    lair = new Room("Lords Grumb's Lair", "", wall, wall, wall, "stairs");

}
