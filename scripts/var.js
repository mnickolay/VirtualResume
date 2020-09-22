//window
var width = window.innerWidth;
var height = window.innerHeight;

//scroll
var scrollTimeoutStart = new Date().getTime()/1000;
var scrollTimeoutEnd;

//nav
var page = "home";
var navCircle1 = document.querySelector("#navCircle1"),
    navCircle2 = document.querySelector("#navCircle2"),
    navCircle3 = document.querySelector("#navCircle3"),
    navCircle4 = document.querySelector("#navCircle4");

//colors
var color = "#0000ff";

//body
var bodyR = document.querySelector(".bodyRight");
    

//logo
var logoMain = $(".logoMain"),
    borderString = "";