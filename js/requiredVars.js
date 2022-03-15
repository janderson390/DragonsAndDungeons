// This should be at the very top of the load order, i think
// I put this here to help prevent spaghetti code


// GAME MANAGER
var GAME = {
    character: null
}

// FOR TEXT PARSER
let usrInput = document.querySelector("#usrInput");
let usrOutput = document.querySelector(".displayTxt p");
let errorMsgs = [
    "Your command flew onto deaf ears.",
    "You spoke and what came out was gibberish.",
    "I think you misspoke.",
    "You hit your head or something?",
    "Command invalid."
]

// FORMS
let submitForm = document.querySelector("#commandForm")
submitForm.addEventListener("submit", function(e){e.preventDefault();})

// CHARACTER INFO
let charInfoClass = document.querySelector(".charInfoClass");
let stats = document.querySelectorAll(".stats");
let usrName = document.querySelector(".usrName");
let charInfoName = document.querySelector(".charInfoName");
let classes = document.querySelectorAll(".formContainer input[type=\"radio\"]");
let createBtn = document.querySelector("#submitCharacter");
let divContainer = document.querySelector(".container");
let playerHealth = document.querySelector(".charInfoHealth");
let totalScore = 0;

// MONSTER INFO
let monsterName;
let monsterHealth;
let monsterCon;
let monsterAtk;
let monsterDex;



// INVENTORY AND ITEMS
let inventoryTable = document.querySelector("#inventoryTable");
let foodType = {
    Solid: 0,
    Liquid: 1
}

// COMBAT
let firstHit = true;

// OUTPUT DISPLAY
let outputDisplay = document.querySelector(".displayBox")