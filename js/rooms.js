// rooms
var blockade = "There is rubble blocking this way."
var wall = "There is a wall this way."
var lockedDoor = "The door is locked."

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

function generateRooms() {
    startingCell = new Room("Starting Cell","A dust-covered cell, with skeletons all around.", "cavern", wall, wall, wall);

    cavern = new Room("Cavern", "An open cavern with markings all over the walls", wall, "startingCell", lockedDoor, "Next Room");
}
