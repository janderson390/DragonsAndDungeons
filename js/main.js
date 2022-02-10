// This script should be the bottommost <script> in the index, i think
// main should be the first js func to run when the whole webpage loads, right?

function main() {
    // INTRO (character creation, etc.)
    createCharacter("Player1", "Fighter");

    // temp
    stats[0].innerHTML = GAME.character.atk;
    stats[1].innerHTML = GAME.character.dex;
    stats[2].innerHTML = GAME.character.con;

    // SETUP GAME (level/rooms, etc.)
    // Description of the first room will go here
    usrOutput.append("You awaken in a dust-covered cell, surrounded by skeletons in shackles.");

    // PARSER
    parserStart();

    // MISC STUFF

    
}


window.onload = main;