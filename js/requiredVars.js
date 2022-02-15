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
let divContainer = document.querySelector(".container");