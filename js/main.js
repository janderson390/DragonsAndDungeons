// This script should be the bottommost <script> in the index, i think
// main should be the first js func to run when the whole webpage loads, right?

function main() {
    // INTRO (character creation, etc.)
    createCharacterScreen();
}

function startGame() {
    // SETUP GAME (level/rooms, etc.)
    // Create rooms and set the starting room.
    generateRooms();
    currentRoom = startingCell;
    displayNewRoomInfo();

    // PARSER
    parserStart();
}


window.onload = main;