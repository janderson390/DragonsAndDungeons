function combat(monster) {

    let playerAtk = stats[0].innerHTML;

    let playerDex = stats[1].innerHTML;

    let br = document.createElement("br");


    GAME.monster = new Monster(monster);
    monsterName = GAME.monster.monsterName;
    monsterAtk = GAME.monster.atk;
    monsterDex = GAME.monster.dex;
    

    if (firstHit) {

        firstHit = false;

        monsterCon = GAME.monster.con;

        // Monster
        if (monsterCon > 0) {
            // Chance to hit
            if (numGenFor("hitChance")) {

                // Chance to crit
                if (numGenFor("critChance", monsterAtk, monsterDex)) {

                    // Adding crit rate to monster's attack
                    monsterAtk += numGenFor("crit", monsterAtk, monsterDex);

                    playerHealth.innerHTML -= monsterAtk;

                    usrOutput.append(monsterName + " landed a critical hit.");

                    usrOutput.append(br);

                    customAppend(monsterName + " landed a critical hit.");

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

                    } else {
                        // Normal hit
                        monsterHealth = monsterCon - playerAtk;

                        usrOutput.append("You landed a hit. " + monsterName + " now has " + monsterHealth + " HP");

                    }

                } else { // Player missed hit

                    usrOutput.append("You missed.");

                }

            }

        }
        
    } else { // After first hit

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

                    } else {
                        // Normal hit
                        monsterHealth -= playerAtk;

                        if (monsterHealth < 0) {
                            usrOutput.append("You landed a hit. " + monsterName + " is dead.")

                        } else {

                            usrOutput.append("You landed a hit. " + monsterName + " now has " + monsterHealth + " HP");

                        }


                    }

                } else { // Player missed hit

                    usrOutput.append("You missed.");

                }

            }

        } else { // Player is dead

            usrOutput.innerHTML = "";

            insults();

            reset("player");

        }
    }

} // Last bracket for combat()


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

    if (type == "monster") { // Monster is dead

        monsterCon = GAME.monster.con;

    } else if (type == "player") { // Game over, player is dead

        playerHealth.innerHTML = GAME.character.con;

        monsterCon = GAME.monster.con;


    } 


} // Last bracket for reset()


// Lord Grumb's savage insults
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
    let currentMob = currentRoom.mob.name.toLowerCase();

    // This shortens the name of "Giant Sentient Lamp" and "A pickle" monster
    if (name == "lamp") {

        name = lampName;

    } else if (name == "pickle") {

        name = pickleName;

    }

    
    if (name == skeletonName || name == zombieName || name == lampName || name == pickleName) {

            if (currentMob != undefined || currentMob != null) {

                console.log(currentMob + " is found in current room");

                // Checks currentMob
                if (currentMob == skeletonName && name == currentMob) {

                    return true;

                } else if (currentMob == zombieName && name == currentMob){

                    return true;

                } else if (currentMob == lampName && name == currentMob){

                    return true;

                } else if (currentMob == pickleName && name == currentMob){

                    return true;

                } else {

                    usrOutput.append(name + " is not found.")

                }


            } else {

                return false;

            }


    } else {

        usrOutput.append(name + " is not found.")

        return false;

    }

} // Last bracket for monsterCheck()
