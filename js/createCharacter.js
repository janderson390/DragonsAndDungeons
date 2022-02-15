
// let createCharacterDiv = document.getElementById('createCharacterDiv');
// let createCharacterForm = document.getElementById('createCharacterForm');

let characterClass = {
    Fighter: {
        atk: 12, dex: 10, con: 10
    },
    Ranger: {
        atk: 10, dex: 12, con: 10
    },
    Brute: {
        atk: 10, dex: 10, con: 12
    }
}

class Character {
    constructor(name, className) {
        this.name = name;
        this.className = className;
        this.atk = characterClass[className].atk;
        this.dex = characterClass[className].dex;
        this.con = characterClass[className].con;
    }
}

// createCharacterForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     createCharacterDiv.style.display = "none";
// });

// very temp
function createCharacter(name, className) {
    GAME.character = new Character(name, className);

    usrOutput.append("NAME: " + GAME.character.name);
    usrOutput.append(document.createElement("br"));
    usrOutput.append("CLASS: " + GAME.character.className);
    usrOutput.append(document.createElement("br"));
    usrOutput.append("ATK: " + GAME.character.atk);
    usrOutput.append(document.createElement("br"));
    usrOutput.append("DEX: " + GAME.character.dex);
    usrOutput.append(document.createElement("br"));
    usrOutput.append("CON: " + GAME.character.con);
    usrOutput.append(document.createElement("br"));
}


