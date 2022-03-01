// variables that hold description of travel blockers
var blockade = "There is rubble blocking this way."
var wall = "There is a wall this way."
var lockedDoor = "The door is locked."

// Room structure
class Room {
    constructor(roomName, description, north, south, east, west) {
        this.roomName = roomName;
        this.description = description;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.inventory = new Inventory();
    }
}


// Create the rooms in the game
// follows structure of (Room Name, Room Description, N, S, E, W)
function generateRooms() {

    // FIRST FLOOR
    startingCell = new Room("Starting Cell","a dust-covered cell, with skeletons all around.", "cavern", wall, wall, wall);

    cavern = new Room("Cavern", "an open cavern with markings all over the walls.", blockade, "mine", "storage", "hallway");
    cavern.inventory.addItem(new Consumable(foods[0].name, foods[0].desc, foods[0].value, foods[0].effect));

    // South
    mine = new Room("Mine", "an abandoned mine with rotting corpses and worn pickaxes on the floor.", "cavern", wall, wall, wall);
    mine.inventory.addItem(new Weapon(weaps[1].name, weaps[1].desc, weaps[1].value, weaps[1].damage));
    mine.inventory.addItem(new Item(basicItems[1].name, basicItems[1].desc, basicItems[1].value));

    // West
    hallway = new Room("Hallway", "a narrow hallway very little light to see.", wall, wall, "cavern", "cellar");

    //TODO: replace lockedDoor with "stairs" if key is in inventory
    cellar = new Room("Cellar", "an open cellar with cobwebs all around and bare shelves.", lockedDoor, wall, "hallway", wall);

    stairs = new Room("Stairs", "a dark brick stairwell with the way up to the east.", wall, wall, "next room")

    // East
    // TODO: add ability to get key from this room by searching
    storage = new Room("Storage", "a storage room with crates of supplies.", wall, wall, wall, "cavern");
    storage.inventory.addItem(new Item(questItems[0].name, questItems[0].desc, questItems[0].value)); // This is the key


    // SECOND FLOOR


    // THIRD FLOOR
    lair = new Room("Lords Grumb's Lair", "", wall, wall, wall, "stairs")

}
