// variables that hold description of travel blockers
var blockade = "There is rubble blocking this way."
var wall = "There is a wall this way."
var lockedDoor = "The door is locked."

// Room structure
class Room {
    constructor(roomName, description,north, south, east, west, mob) {
        this.roomName = roomName;
        this.description = description;
        this.north = north;
        this.south = south;
        this.east = east;
        this.west = west;
        this.mob = mob;
        this.inventory = new Inventory();
    }
}

// Should we add placeholder for an item that could be in the rooms? If there is an item place it otherwise it can be null or the description can be "no item"
// Create the rooms in the game
// follows structure of (Room Name, Room Description, N, S, E, W)
function generateRooms() {

    // FIRST FLOOR
    startingCell = new Room("Starting Cell","a dust-covered cell, with skeletons all around. There seems to be a passage to the north out of this room.", "cavern", wall, wall, wall);
    startingCell.inventory.addItem(new Item(item.femurBone));
    startingCell.mob = monster.lamp;

    cavern = new Room("Cavern", "an open cavern with markings all over the walls. It seems to encompase the room you started in. During your search, you find the north to be blocked. Where do you go?", blockade, "mine", "storage", "hallway", null);
    cavern.inventory.addItem(new Consumable(consumable.apple));
    cavern.mob = monster.skeleton;

    // South
    mine = new Room("Mine", "an abandoned mine with rotting corpses and worn pickaxes on the floor. Rocks from a cave in block all paths except whence you came.", "cavern", wall, wall, wall, null);
    mine.inventory.addItem(new Weapon(weapon.wornPickaxe));
    mine.inventory.addItem(new Item(item.smallRock));

    // West
    hallway = new Room("Hallway", "a narrow hallway very little light to see. You can hear a faint scream as you enter the room. You have two options... go West or go East.", wall, wall, "cavern", "cellar", null);

    //TODO: replace lockedDoor with "stairs" if key is in inventory
    cellar = new Room("Cellar", "an open cellar with cobwebs all around and bare shelves. You notice as you brush aside the cobwebs that there seems to be a locked door to your north.", lockedDoor, wall, "hallway", wall, null);
    cellar.inventory.addItem(new Consumable(consumable.deadSpider));

    stairs = new Room("Stairs", "a dark brick stairwell with the way up to the east.", wall, wall, "kitchen", wall, null)

    // East
    // TODO: add ability to get key from this room by searching
    storage = new Room("Storage", "a storage room with crates of supplies. It looks as if someone has been here recently... There are no exits except the one you came from.", wall, wall, wall, "cavern", null);
    storage.inventory.addItem(new Item(questItem.rustyKey)); // This is the key


    // SECOND FLOOR
    kitchen = new Room("Kitchen", "The STAIRS break on your way up leaving you in a grotesque KITCHEN; mold lined walls, grease splatted everywhere and a stench of inedible food.  A broken door hangs in the doorway to the SOUTH.", "stairs", "armory", wall, wall, null);
    kitchen.inventory.addItem(new Consumable(consumable.apple));

    // plank found here if we add it
    armory = new Room("Armory", "Raided weapon racks surround the room. Through the open doorway on the WEST wall a BRIDGE can be seen.", "kitchen", wall, wall, "bridge", null);

    // add if we want plank
    //ibridge = new Room("Incomplete Bridge", "Marvelously engineered unfinished bridge. A plank would be able to make it to the other side", wall, wall, "throne", "kitchen")
    // add mobs
    bridge = new Room("Bridge", "A stone bridge over the CAVERN, monsters block your path. WEST takes you back to the AROMRY, EAST lies the GREAT HALL.", wall, wall, "greatHall", "armory", null);

    greatHall = new Room("Great Hall", "A vast room spralls before you once holding grand feasts but no longer. The NORTH wall is broken giving a glimpse of the THRONE ROOM", "throne", wall, wall, "bridge", null);

    throne = new Room("Throne Room", "Lord Grumb's desolate throne sits center as the focal point. A door can be seen NORTH of the throne.", "tower", "greatHall", wall, wall, null);

    tower = new Room("Great Tower", "A large tower where Lord Grumb commands his forces. Taking the stairs leads to a SOUTH facing opening reek with a foul stench.", wall, "lair", wall, wall, null);

    // THIRD FLOOR
    lair = new Room("Lords Grumb's Lair", "As you come through the opening you gaze upon the source of the odor...", "tower", wall, wall, wall, null);
}
