// This is called from textParser.js

var helpCount = 0;

function runCommand(command, request) {
    usrOutput.append(document.createElement("br"));

    switch (command) {
        case "move":
        case "go":
        case "walk":
            moveTo(request);
            break;

        case "take":
        case "grab":
            take(request);
            break;

        case "drop":
            drop(request);
            break;

        case "eat":
        case "drink":
        case "consume":
            consume(request);
            break;

        case "inspect":
            inspect(request);
            break;
        
        case "attack":
            attack(request);
            break;

        case "flee":
        case "run":
            flee(request);
            break;

        case "observe":
        case "look":
            observe();
            break;
        
        case "search":
            search();
            break;

        case "help":
            displayHelp();
            break;

        case "clearoutput":
            clearOutput();
            break;

        default:
            displayError();
    }
}

function moveTo(request) {
    // note: request will prob be cardinal directions

    switch (request) {
        case "north":
        case "south":
        case "east":
        case "west":
            if (currentRoom[request] != wall) {

                if (currentRoom[request] != lockedDoor) {
                    
                    if (currentRoom[request] != blockade) {
    
                        currentRoom = eval(currentRoom[request]);
                        usrOutput.append("You enter " + currentRoom.description);
    
                    } else {
                        usrOutput.append(blockade);
                    }
    
                } else {
                    if (GAME.character.inventory.getItemFromName("rusty key") != null) {
                        usrOutput.append("You open the door with a key. ");
                        currentRoom = stairs;
                        usrOutput.append("You enter " + currentRoom.description);
                    } else {
                        usrOutput.append(lockedDoor);
                    }
                    
                }
    
            } else {
                usrOutput.append(wall);
            } 
            break;
            
        default:
            displayError();
    }
  

    // TODO: move locations
}

function take(request) {
    // Check if the user just typed in "take", same as most commands
    if (request === "") {
        usrOutput.append("You didn't take anything.");
        return;
    }

    // Check if the item exists in the room, then add to character's inventory
    let item = currentRoom.inventory.getItemFromName(request);

    if (item != null) {
        GAME.character.inventory.addItem(item);
        currentRoom.inventory.removeItem(request);

        refreshInventoryDisplay();
        usrOutput.append("You took the " + request + ".");
    } else {
        usrOutput.append("You couldn't find " + request + " in the room.");
    }
    
}

function drop(request) {
    if (request === "") {
        usrOutput.append("You didn't drop anything.");
        return;
    }

    // Check if the item exists in the character, then add to room's inventory
    let item = GAME.character.inventory.getItemFromName(request);

    if (item != null) {
        currentRoom.inventory.addItem(item);
        GAME.character.inventory.removeItem(request);

        refreshInventoryDisplay();
        usrOutput.append("You dropped the " + request + " from your inventory.");
    } else {
        usrOutput.append("You didn't have " + request + " in your inventory.");
    }
}

function consume(request) {
    if (request === "") {
        usrOutput.append("You didn't eat/drink anything.");
        return;
    }
    
    let item = GAME.character.inventory.getItemFromName(request);

    if (item != null && item instanceof Consumable) {
        GAME.character.inventory.removeItem(request);

        // TODO: Add any effects item had (add hp, etc.), display appropriate text for 
        //       liquids and solids, tbd

        refreshInventoryDisplay();
        usrOutput.append("You ate/drank the " + request + ".");
    } else if (!(item instanceof Consumable)) {
        usrOutput.append("You can't eat/drink the " + request + "!");
    } else {
        usrOutput.append("You didn't have " + request + " in your inventory.");
    }
}

function inspect(request) {
    if (request === "") {
        usrOutput.append("You didn't inspect anything.");
        return;
    }

    let item = GAME.character.inventory.getItemFromName(request);

    if (item != null) {
        usrOutput.append(item.description);
    } else {
        usrOutput.append("You don't have a " + request + " to inspect.")
    }
}

function attack(request) {
    if (request === "") {
        usrOutput.append("You didn't target anything.");
        return;
    }

    //usrOutput.append("You attacked the " + request + ".");

    if (monsterCheck(request)) {
        combat(request);
    } else {
        displayError();
    }
}

function flee() {
    usrOutput.append("You fleed from battle!");

    // TODO: Go back to previous room
}

function observe() {
    usrOutput.append("You see " + currentRoom.description);
}

function search() {
    if (currentRoom.inventory.items.length == 0) {
        usrOutput.append("You searched the room, but didn't find anything.");
    } else {
        usrOutput.append("You searched the room and found: ");

        for (let i = 0; i < currentRoom.inventory.items.length; i++) {
            usrOutput.append(document.createElement("br"));
            usrOutput.append(currentRoom.inventory.items[i].name);
        }
    }
}

function refreshInventoryDisplay() {
    inventoryTable.innerHTML = "";

    for (let i = 0; i < GAME.character.inventory.items.length; i++) {
        let tr = document.createElement("tr");
        tr.className = "inventoryItem";

        let tdName = document.createElement("td");
        tdName.innerHTML = GAME.character.inventory.items[i].name;

        let tdValue = document.createElement("td");
        tdValue.innerHTML = GAME.character.inventory.items[i].value;

        tr.append(tdName);
        tr.append(tdValue);

        inventoryTable.append(tr);
    }
}

var commands = [
    "move",
    "take, grab",
    "drop",
    "eat, drink, consume",
    "attack",
    "flee, run",
    "observe, look",
    "help",
    "clearoutput"
]

function displayHelp() {
    helpCount = 0;
    usrOutput.append(document.createElement("br"));
    usrOutput.append("List of commands available:");
    usrOutput.append(document.createElement("br"));
    usrOutput.append("*separated by comma means they do the same thing*");

    for (let i = 0; i < commands.length; i++) {
        usrOutput.append(document.createElement("br"));
        usrOutput.append(commands[i]);
    }
}

function clearOutput() {
    usrOutput.innerHTML = "";
}

var errorMsgs = [
    "Your command flew onto deaf ears.",
    "You spoke and what came out was gibberish.",
    "I think you misspoke.",
    "You hit your head or something?",
    "Command invalid."
]

function displayError() {
    // Grab a random error msg and display it
    usrOutput.append(errorMsgs[Math.floor(Math.random() * errorMsgs.length)]);
    helpCount += 1;

    if (helpCount >= 5) {
        helpCount = 0;
        usrOutput.append(document.createElement("br"));
        usrOutput.append("Type \"help\" to display a list of available commands.");
    }

    
}