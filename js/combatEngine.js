function combat(monster) {

    let playerAtk = stats[0].innerHTML;

    let playerDex = stats[1].innerHTML;

    let br = document.createElement("br");


    GAME.monster = new Monster(monster);
    monsterName = GAME.monster.monsterName;
    monsterAtk = GAME.monster.atk;
    monsterDex = GAME.monster.dex;
    monsterScore = GAME.monster.score;

    if (firstHit) {

        firstHit = false;

        monsterCon = GAME.monster.con;

        monsterHealth = monsterCon;

        // Monster
        if (monsterCon > 0) {

            // Check if player is still alive
            if (playerHealth.innerHTML > 0) {

                // Chance to hit
                if (numGenFor("hitChance")) {

                    // Chance to crit
                    if (numGenFor("critChance", monsterAtk, monsterDex)) {

                        // Adding crit rate to monster's attack
                        monsterAtk += numGenFor("crit", monsterAtk, monsterDex);

                        playerHealth.innerHTML -= monsterAtk;

                        usrOutput.append(monsterName + " landed a critical hit.");

                        usrOutput.append(br);

                    } else { // Normal hit

                        playerHealth.innerHTML -= monsterAtk;

                        usrOutput.append(monsterName + " hits you for " + monsterAtk + " points");

                        usrOutput.append(br);

                    }

                } else { // Monster missed hit

                    usrOutput.append(monsterName + " missed.");

                    usrOutput.append(br);

                }

            }

        } else { // Monster is dead

            usrOutput.append(monsterName + " is dead.");

        }


        // Player is attacking monster
        if (playerHealth.innerHTML > 0) {

            // If monster is still alive 
            if (monsterCon > 0) {

                // Chance to hit
                if (numGenFor("hitChance")) {

                    // Chance to crit 
                    if (numGenFor("critChance", playerAtk, playerDex)) {

                        // Adding crit rate to player's attack
                        playerAtk += numGenFor("crit", playerAtk, playerDex);

                        monsterHealth = monsterCon - playerAtk;

                        // Check if monster died from hit
                        if (monsterHealth < 0) {

                            usrOutput.append("You landed a critical hit. " + monsterName + " is now dead.");

                            totalScore += monsterScore;

                            console.log("Score: " + totalScore);

                        } else {

                            usrOutput.append("You landed a critical hit. " + monsterName + " now has " + monsterHealth + " HP");

                        }

                    } else {
                        // Normal hit
                        monsterHealth = monsterCon - playerAtk;

                        if (monsterHealth < 0) {

                            usrOutput.append("You landed a hit. " + monsterName + " is now dead.");

                            totalScore += monsterScore;

                            console.log("Score: " + totalScore);

                        } else {
                            usrOutput.append("You landed a hit. " + monsterName + " now has " + monsterHealth + " HP");
                        }

                    }

                } else { // Player missed hit

                    usrOutput.append("You missed.");

                }

            }

        }

    } else { // After first hit

        console.log("Monster Health: " + monsterHealth);

        // Monster
        if (monsterHealth > 0) {

            // Chance to hit
            if (numGenFor("hitChance")) {

                // Chance to crit
                if (numGenFor("critChance", monsterAtk, monsterDex)) {

                    // Adding crit rate to monster's attack
                    monsterAtk += numGenFor("crit", monsterAtk, monsterDex);

                    playerHealth.innerHTML -= monsterAtk;

                    usrOutput.append(monsterName + " landed a critical hit.");

                    usrOutput.append(br);

                } else { // Normal hit
                    playerHealth.innerHTML -= monsterAtk;

                    usrOutput.append(monsterName + " hits you for " + monsterAtk + " points");

                    usrOutput.append(br);

                }

            } else { // Monster missed hit

                usrOutput.append(monsterName + " missed.");

                usrOutput.append(br);

            }

        } else { // Monster is dead

            usrOutput.append(monsterName + " is dead.");

        }


        // Player is attacking monster
        if (playerHealth.innerHTML > 0) {

            // If monster is still alive 
            if (monsterHealth > 0) {

                // Chance to hit
                if (numGenFor("hitChance")) {

                    // Chance to crit 
                    if (numGenFor("critChance", playerAtk, playerDex)) {

                        // Adding crit rate to player's attack
                        playerAtk += numGenFor("crit", playerAtk, playerDex);

                        monsterHealth -= playerAtk;

                        if (playerHealth <= 0) {
                            playerDeath();
                        }

                        if (monsterHealth < 0) {

                            usrOutput.append("You landed a critical hit. " + monsterName + " is dead.")

                            totalScore += monsterScore;

                            console.log("Score: " + totalScore);

                        } else {

                            usrOutput.append("You landed a critical hit. " + monsterName + " now has " + monsterHealth + " HP");

                        }

                    } else { // Normal hit

                        monsterHealth -= playerAtk;

                        if (monsterHealth < 0) {

                            usrOutput.append("You landed a hit. " + monsterName + " is dead.")

                            totalScore += monsterScore;

                            if (playerHealth <= 0) {
                                playerDeath();
                            }

                            console.log("Score: " + totalScore);

                        } else {

                            usrOutput.append("You landed a hit. " + monsterName + " now has " + monsterHealth + " HP");

                        }

                    }

                } else { // Player missed hit

                    usrOutput.append("You missed.");

                }

            }

        } else { // Player is dead

            playerDeath();

        }
    }

} // Last bracket for combat()

function playerDeath() {
    // Disable text input
    usrInput.disabled = true;

    usrOutput.innerHTML = "";

    // Reset high score
    characterHighScore.innerHTML = "High Score: "
    populateDatabase(totalScore);
    setTimeout(getHighScore(), 3000);

    totalScore = 0;

    insults();

    reset("player");
}


// Generates numbers for Hit chance, Crit Chance and Crit Damage
// Formulas for crit chance and crit hit need major refinement in the future...
function numGenFor(type, atk, dex) {

    let numGen;

    let probability = Math.round(5 + ((atk * dex) / 100));

    let randNum = ((Math.random() * (atk * dex / dex)) + 1) * dex / 100;


    if (type === "hitChance") {
        numGen = (Math.floor(Math.random() * 2) + 1) % 2;

    } else if (type === "critChance") {
        numGen = (Math.round(Math.random() * 100) + 1) <= probability;

    } else if (type === "crit") {
        numGen = Math.round(1.2 * randNum);
    }


    return numGen;

} // Last bracket for numGenFor()


// Resets monster's health
function reset(type) {

    firstHit = true;

    totalScore = 0;

    console.clear();

    if (currentRoom.mob != null) {

        if (type == "monster") { // Monster is dead

            monsterCon = GAME.monster.con;

        } else if (type == "player") { // Game over, player is dead

            setTimeout(function () {

                usrOutput.innerHTML = "";
        
                usrOutput.append("Resetting Game...");
        
                // Sets another timeout of 3 seconds before calling reset function
                setTimeout(function () {
        
                    usrOutput.innerHTML = "";
                    
                    currentRoom = startingCell;
        
                    usrOutput.append("You enter " + currentRoom.description +
                        "\nYou see an item of interest: ");
        
                    playerHealth.innerHTML = GAME.character.con;
        
                    // Re-enable text input
                    usrInput.disabled = false;
        
                }, 3000)
        
        
            }, 3000)

            // monsterCon = GAME.monster.con;

        }
    }




} // Last bracket for reset()


// Lord Grumb has graced us with his savage insults
function insults() {
    let br = document.createElement("br");

    let insults = ["You suck.", "You are an incompetent fool!", "I spit on you!",
        "I pity your mother."];

    usrOutput.append(br);

    usrOutput.append(insults[Math.floor(Math.random() * insults.length)]);

    usrOutput.append(br);

    usrOutput.append("- Lord Grumb");

} // Last bracket for insults()


// Validates if there is a monster
function monsterCheck(name) {

    let skeletonName = monster.skeleton.name.toLowerCase();
    let zombieName = monster.zombie.name.toLowerCase();
    let lampName = monster.lamp.name.toLowerCase();
    let pickleName = monster.pickle.name.toLowerCase();
    let grumbName = monster.finalBoss.name.toLowerCase();
    let currentMob;

    // Checks to see if there is a monster
    if (currentRoom.mob != null) {
        currentMob = currentRoom.mob.name.toLowerCase();
    } else {
        return false;
    }

    if (name == "grumb" || name == "lord grumb" || name == "world destroyer grumb") {

        name = grumbName;

    }

    // This checks if the object literal called monster has a property name
    // that matches the passed in name.
    if (monster.hasOwnProperty(name)) {

        // This changes the passed in name to match the name property of 
        // both the lamp and pickle monsters.
        if (name == "lamp") {

            name = lampName;

        } else if (name == "pickle") {

            name = pickleName;

        }

        console.log(currentMob + " is found in current room.");

        // Checks currentMob
        if (currentMob == skeletonName && name == currentMob) {

            return true;

        } else if (currentMob == zombieName && name == currentMob) {

            return true;

        } else if (currentMob == lampName && name == currentMob) {

            return true;

        } else if (currentMob == pickleName && name == currentMob) {

            return true;

        } else if (currentMob == grumbName && name == currentMob) {

            return true;

        } else {

            usrOutput.append(name + " is not found.")

            return false;

        }

    } else {

        usrOutput.append(name + " is not found.")

        return false;

    }

} // Last bracket for monsterCheck()


function grumbsBane() {

    let grumb = monster.finalBoss;

    grumb.con = 0;

    totalScore += grumb.score;

    usrInput.disabled = true;

    let ctr = 0;

    let ctr2 = 0;

    let grumbsMonologue;

    let theEndOfGrumb;

    let grumbsFarewell = [
        "\" You suck! ",
        "What have you done to me! ",
        "You are an incompetent fool! ",
        "You disgrace, I spit on you! ",
        "I pity your mother! You definately are a mistake! ",
        "I refuse to be defeated by the likes of you! ",
        "Do you know who I am! ",
        "Do you know what I have done!",
        "I have crushed the skulls of heroes!",
        "I have buried your continents with bodies! ",
        "I have caused eras to fall!",
        "My steps cause earthquakes!",
        "My roars make mountains crumble!",
        "My breath strikes fear into the hearts of giants!",
        "I am devastation!",
        "I am desolation! ",
        "I am decimation!",
        "Not even death can save you from me!",
        "I am Grumb! The FREAKING World Destroyer!",
        "Know this, ",
        "You atrocious, ",
        "inferior, ",
        "abomniable, ",
        "defective, ",
        "pathetic, ",
        "weak, ",
        "disgusting, ",
        "deficient...\"",
        "..."
    ];

    let theFinalPiece = [
        "Grumb stops his monologue midway. ",
        "Silence fills the room.",
        "You hesitate to move in fear of hearing more of \"The FREAKING World Destroyer\'s\" savagery.",
        "Grumb gurgles, foam rises and drips from his mouth. ",
        "He slowly stumbles backward and collapses to the floor.",
        "...",
        "...",
        "Congrats, you won!",
        "You scored: " + totalScore
    ];

    setTimeout(function () {
        usrOutput.append("Grumb squeals at the sight of the spider.");

        usrOutput.append(document.createElement("br"));

        startInterval(grumbsFarewell, theFinalPiece);

    }, 2000)
    
    function startInterval(msg, msg2) {

        grumbsMonologue = setInterval(function () {
            usrOutput.append(msg[ctr]);
            usrOutput.append(document.createElement("br"));
            updateScrolling();
            ctr++;

            if (ctr >= msg.length) {

                console.log("inside if for interval");

                endInterval(grumbsMonologue);

                setTimeout(function () {

                    theEndOfGrumb = setInterval(function () {
                        usrOutput.append(msg2[ctr2]);
                        usrOutput.append(document.createElement("br"));
                        updateScrolling();
                        ctr2++;

                        if (ctr2 >= msg2.length) {
                            endInterval(theEndOfGrumb);
                            setTimeout(function () {reset("player");}, 5500)
                        }

                    }, 2800);

                }, 2850);

            }

        }, 2800);
    }

    function endInterval(end) {
        clearInterval(end);
    }

    console.log("Score: " + totalScore);

}