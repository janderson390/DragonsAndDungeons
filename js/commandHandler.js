// This is called from textParser.js

var helpCount = 0;

function runCommand(command, request) {
    usrOutput.append(document.createElement("br"));

    switch (command) {
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

        case "flee":
        case "run":
            flee(request);
            break;

        case "help":
            displayHelp();
            break;

        default:
            displayError();
    }
}

function take(request) {
    // Check if the user just typed in "take", same as most commands
    if (request === "") {
        usrOutput.append("You didn't take anything.");
    } else {
        usrOutput.append("You took the " + request + ".");
    }

    // TODO: compare request string to items in the room, add item to the inventory
}

function drop(request) {
    if (request === "") {
        usrOutput.append("You didn't drop anything.");
    } else {
        usrOutput.append("You dropped the " + request + " from your inventory.");
    }

    // TODO: compare request to items in the inventory, add item to the room
}

function consume(request) {
    if (request === "") {
        usrOutput.append("You didn't eat/drink anything.");
    } else {
        usrOutput.append("You ate/drank the " + request);
    }

    // TODO: compare request to items in the inventory, remove from inventory
    // add any effects item had (add hp, etc.), display appropriate text for 
    // liquids and solids, tbd
}

function flee() {
    usrOutput.append("You fleed from battle!");
}

// golly this is UGLY but it works for now
function displayHelp() {
    helpCount = 0;
    usrOutput.append(document.createElement("br"));
    usrOutput.append("List of commands available now:");
    usrOutput.append(document.createElement("br"));
    usrOutput.append("*separated by comma means they do the same thing*");
    usrOutput.append(document.createElement("br"));
    usrOutput.append("take, grab");
    usrOutput.append(document.createElement("br"));
    usrOutput.append("drop");
    usrOutput.append(document.createElement("br"));
    usrOutput.append("flee, run");
    usrOutput.append(document.createElement("br"));
    usrOutput.append("help");
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