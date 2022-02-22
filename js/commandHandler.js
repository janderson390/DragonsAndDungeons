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
    if (request === "") {
        usrOutput.append("You didn't specify a direction.");
    } else {
        usrOutput.append("You moved " + request + ".");
    }

    // TODO: move locations
}

function take(request) {
    // Check if the user just typed in "take", same as most commands
    if (request === "") {
        usrOutput.append("You didn't take anything.");
    } else {
        ////// this is temp, just makin it work
        let upperCased = request.charAt(0).toUpperCase() + request.slice(1);
        let item = new Item(upperCased, "This is an item.", Math.floor(Math.random() * 50));
        GAME.character.inventory.addItem(item);
        //////

        usrOutput.append("You took the " + upperCased + ".");
    }
}

function drop(request) {
    if (request === "") {
        usrOutput.append("You didn't drop anything.");

    // Attempt to remove item from inventory
    } else if (GAME.character.inventory.removeItem(request)) {
        usrOutput.append("You dropped the " + request + " from your inventory.");

        // TODO: Add removed item into the room

    } else {
        usrOutput.append("You didn't have " + request + " in your inventory.");
    }
}

function consume(request) {
    if (request === "") {
        usrOutput.append("You didn't eat/drink anything.");
    } else {
        usrOutput.append("You ate/drank the " + request + ".");
    }

    // TODO: compare request to items in the inventory, remove from inventory
    // add any effects item had (add hp, etc.), display appropriate text for 
    // liquids and solids, tbd
}

function inspect(request) {
    if (request === "") {
        usrOutput.append("You didn't inspect anything.");
    } else {
        let item = GAME.character.inventory.getItemFromName(request);

        if (item != null) {
            usrOutput.append(item.description);
        } else {
            usrOutput.append("You don't have a " + request + " to inspect.")
        }
    }
}

function attack(request) {
    if (request === "") {
        usrOutput.append("You didn't target anything.");
    } else {
        usrOutput.append("You attacked the " + request + ".");
    }

    // TODO: hmmmm
}

function flee() {
    usrOutput.append("You fleed from battle!");

    // TODO: Go back to previous room
}

function observe() {
    usrOutput.append("You observe your surroundings.");

    // TODO: grab description from the room and put it here
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