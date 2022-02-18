// This script should be the bottommost <script> in the index, i think
// main should be the first js func to run when the whole webpage loads, right?

function main() {
    // INTRO (character creation, etc.)
    createCharacterScreen();
}

function startGame() {
    // SETUP GAME (level/rooms, etc.)
    // Description of the first room will go here
    usrOutput.append("You awaken in a dust-covered cell, surrounded by skeletons in shackles.");

    // Create rooms and set the starting room.
    generateRooms();
    let currentRoom = startingCell;

    // PARSER
    parserStart();
}


window.onload = main;