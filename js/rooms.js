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
    }
}


// Create the rooms in the game
// follows structure of (Room Name, Room Description, N, S, E, W)
function generateRooms() {
    startingCell = new Room("Starting Cell","a dust-covered cell, with skeletons all around.", "cavern", wall, wall, wall);

    cavern = new Room("Cavern", "an open cavern with markings all over the walls", wall, "mine", "storage", "hallway");

    hallway = new Room("Hallway", "a narrow hallway very little light to see.", wall, lockedDoor, cavern, "cellar");
    
    mine = new Room("Mine", "an abandoned mine", "cavern", wall, wall, wall);

    cellar = new Room("Cellar", "a dark dank cellar", "stairs", wall, "hallway", wall);

    storage = new Room("Storage","Supplies for the mine are stored here", wall, wall, wall, "cavern");
    
    
    
}
