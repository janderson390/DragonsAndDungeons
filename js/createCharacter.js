
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
        this.inventory = new Inventory();
    }
}

function createCharacterScreen() {
    // Selects the first class
    classes[0].checked = true;
    // Hides the div containing the main display
    divContainer.style.opacity = 0;


    var validated = false;

    // Sets user name and class when create button is clicked
    createBtn.onclick = function(e) {
        e.preventDefault();

        let errorMsg = document.querySelector(".errorMsg");
        
        // Validation for user name
        if (usrName.value === "") {
            errorMsg.innerHTML = "Please enter your name";

        } else if (usrName.value.length > 13) {
            errorMsg.innerHTML = "Name must be less than 13 characters";

        } else {
            charInfoName.innerHTML = usrName.value;
            createCharacterDiv.style.display = "none";
            divContainer.style.opacity = 1;

            validated = true;
        }

        // If everything passes, create a character, then start the game
        if (validated) {

            // Grab the class the player selected
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

            // Create our character
            GAME.character = new Character(usrName.value, classes);

            ////// TEMP: Add some basic items to player's inventory
            GAME.character.inventory.addItem(new Item("Rusty sword", "An old, rusty sword. Can give me tetanus!", 20));
            GAME.character.inventory.addItem(new Item("Apple", "A ripe, unpoisoned, juicy apple.", 2));
            //////

            // Display stats to screen;
            stats[0].innerHTML = GAME.character.atk;
            stats[1].innerHTML = GAME.character.dex;
            stats[2].innerHTML = GAME.character.con;

            startGame();

            validated = false;
        }
    }
}