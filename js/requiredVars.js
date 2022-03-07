// This should be at the very top of the load order, i think
// I put this here to help prevent spaghetti code


// GAME MANAGER
var GAME = {
    character: null
}

// FOR TEXT PARSER
let usrInput = document.querySelector("#usrInput");
let usrOutput = document.querySelector(".displayTxt p");

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

// MONSTER INFO
let monsterName;
let monsterHealth;
let monsterCon;
let monsterAtk;
let monsterDex;



// INVENTORY
let inventoryTable = document.querySelector("#inventoryTable");

// COMBAT
let firstHit = true;