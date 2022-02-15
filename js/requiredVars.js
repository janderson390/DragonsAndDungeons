// This should be at the very top of the load order, i think
// I put this here to help prevent spaghetti code


// GAME MANAGER
var GAME = {
    character: null
}

// FOR TEXT PARSER
let usrInput = document.querySelector("#usrInput");
let usrOutput = document.querySelector(".displayTxt p");

// CHARACTER INFO
let charInfoClass = document.querySelector(".charInfoClass");
let stats = document.querySelectorAll(".stats");
let usrName = document.querySelector(".usrName");
let charInfoName = document.querySelector(".charInfoName");
let classes = document.querySelectorAll(".formContainer input[type=\"radio\"]");
let createBtn = document.querySelector("#submitCharacter");

// Selects the first class
classes[0].checked = true;

// Sets user name and class when create button is clicked
createBtn.onclick = function(e) {
    e.preventDefault();
    let errorMsg = document.querySelector(".errorMsg");
    //let check = false;

    //Validation for user name
    if (usrName.value === "") {
        errorMsg.innerHTML = "Please enter your name";
    } else if (usrName.value.length > 13) {
        errorMsg.innerHTML = "Name must be less than 13 characters";
    } else {
        charInfoName.innerHTML = usrName.value; 

        //GAME.character.name = usrName.value; 
        createCharacterDiv.style.display = "none";

        console.log(charInfoName.innerHTML);
        console.log(GAME.character.name);

        main();
    }


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



    // if (usrName !== "" && classes[0].checked || classes[1].checked || classes[2].checked) {
    //     charInfoName.innerHTML = usrName.value;
    //     createCharacterDiv.style.display = "none";
    //     main();
    // }

}