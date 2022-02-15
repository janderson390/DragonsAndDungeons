
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


function createCharacterScreen() {
    // Selects the first class
    classes[0].checked = true;

    var validated = false;

    // Sets user name and class when create button is clicked
    createBtn.onclick = function(e) {
        e.preventDefault();

        let errorMsg = document.querySelector(".errorMsg");
        
        // Validation for user name
        if (usrName.value === "") {
            errorMsg.innerHTML = "Please enter your name";

            validated = false;
        } else if (usrName.value.length > 13) {
            errorMsg.innerHTML = "Name must be less than 13 characters";

            validated = false;
        } else {
            charInfoName.innerHTML = usrName.value;
            createCharacterDiv.style.display = "none";

            validated = true;
        }

        // If everything passes, create a character, then start the game
        if (validated) {

            if (classes[0].checked) {
                classes = "Fighter";
                charInfoClass.innerHTML = "Fighter";
    
            } else if (classes[1].checked) {
                classes = "Ranger";
                charInfoClass.innerHTML = "Ranger";
    
            } else if (classes[2].checked) {
                classes = "Brute";
                charInfoClass.innerHTML = "Brute";
            }

            GAME.character = new Character(usrName.value, classes);

            stats[0].innerHTML = GAME.character.atk;
            stats[1].innerHTML = GAME.character.dex;
            stats[2].innerHTML = GAME.character.con;

            startGame();

            validated = false;
        }
    }
}