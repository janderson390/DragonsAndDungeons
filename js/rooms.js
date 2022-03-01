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
    }
}

// Should we add placeholder for an item that could be in the rooms? If there is an item place it otherwise it can be null or the description can be "no item"
// Create the rooms in the game
// follows structure of (Room Name, Room Description, N, S, E, W)
function generateRooms() {
    startingCell = new Room("Starting Cell","a dust-covered cell, with skeletons all around.", "cavern", wall, wall, wall);

    cavern = new Room("Cavern", "an open cavern with markings all over the walls", wall, "startingCell", blockade, "hallway");

    hallway = new Room("Hallway", "a narrow hallway very little light to see.", wall, lockedDoor, cavern, "Next Room");
}
