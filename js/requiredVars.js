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
let stats = document.querySelectorAll(".stats");