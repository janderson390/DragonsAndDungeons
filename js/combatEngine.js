function combat() {

    let playerAtk = stats[0].innerHTML;

    let playerDex = stats[1].innerHTML;

    let br = document.createElement("br");
    
/*
    // Skeleton
    if (skellyCon > 0) {
   
        // Chance to hit
        if (numGenFor("hitChance")) {

            // Chance to crit
            if (numGenFor("critChance", skellyAtk, skellyDex)) {

                // Adding crit rate to monster's attack
                skellyAtk += numGenFor("crit", skellyAtk, skellyDex);

                playerHealth.innerHTML -= skellyAtk;

                usrOutput.append("Skeleton crit hit.");

                usrOutput.append(br);

                console.log("Skeleton Crit: " + skellyAtk);

            } else { // Normal hit
                playerHealth.innerHTML -= skellyAtk;

                usrOutput.append(skellyName + " hits you for " + skellyAtk + " points");

                usrOutput.append(br);

            }
 
        } else { // Monster missed hit

            usrOutput.append(skellyName + " missed.");

            usrOutput.append(br);

        }

    } else { // Monster is dead

        usrOutput.append(skellyName + " is dead.");

        //reset()
        
    }
*/

    // Zombie
    if (zombieCon > 0) {
   
        // Chance to hit
        if (numGenFor("hitChance")) {

            // Chance to crit
            if (numGenFor("critChance", zombieAtk, zombieDex)) {

                // Adding crit rate to monster's attack
                skellyAtk += numGenFor("crit", zombieAtk, zombieDex);

                playerHealth.innerHTML -= zombieAtk;

                usrOutput.append(zombieName + " landed a critical hit.");

                usrOutput.append(br);

                console.log(zombieName + " Crit: " + zombieAtk);

            } else { // Normal hit
                playerHealth.innerHTML -= zombieAtk;

                usrOutput.append(zombieName + " hits you for " + zombieAtk + " points");

                usrOutput.append(br);

            }
 
        } else { // Monster missed hit

            usrOutput.append(zombieName + " missed.");

            usrOutput.append(br);

        }

    } else { // Monster is dead

        usrOutput.append(zombieName + " is dead.");

        //usrOutput.append(br);

        //reset()
        
    }


    // Player is attacking monster
    if (playerHealth.innerHTML > 0) {

        // If monster is still alive 
        if (zombieCon > 0) {
                
            // Chance to hit
            if (numGenFor("hitChance")) {

                // Chance to crit 
                if (numGenFor("critChance", playerAtk, playerDex)) {

                    // Adding crit rate to player's attack
                    playerAtk = playerAtk * numGenFor("crit", playerAtk, playerDex);

                    zombieCon -= playerAtk;

                    console.log("Your crit damage: " + playerAtk);

                } else {
                    // Normal hit
                    zombieCon -= playerAtk;

                    usrOutput.append("You landed a hit. " + zombieName + " now has " + zombieCon + " HP");
                }

            } else { // Player missed hit

                usrOutput.append("You missed.");

            }

        }

    } else { // Player is dead

        usrOutput.innerHTML = "";

        usrOutput.append(br);

        usrOutput.append("You suck.");

        usrOutput.append(br);

        usrOutput.append("- Lord Grumb");

        //reset()
    
    }

} // Last bracket for combat()


// Generates numbers for Hit chance, Crit Chance and Crit Damage
// Formulas for crit chance and crit hit need major refinement in the future...
function numGenFor(type, atk, dex) {

    let numGen;

    let probability = Math.ceil(5 + (1 + ((atk * dex) / 100)));

    let randNum =  ((Math.random() * (atk * dex / dex)) + 1) * dex / 100;


    if (type === "hitChance") {
        numGen = (Math.floor(Math.random() * 2) + 1) % 2;

    } else if (type === "critChance") {
        numGen = (Math.round(Math.random() * 100) + 1) < probability;

    } else if (type === "crit") {
        //numGen = 1 + Math.round(((Math.random() * Math.round(atk / 3)) + 1) * dex / 100);
        numGen = Math.round(1.2 * randNum);

    }


    return numGen;

} // Last bracket for numGenFor()


// Resets monster's and players' health
function reset() {

    skellyCon = monster.skeleton.con;

    zombieCon = monster.zombie.con;

    playerHealth.innerHTML = GAME.character.con;

} // Last bracket for reset()