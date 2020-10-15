//page
var html = document.querySelector("html");
var width = window.innerWidth;
var height = window.innerHeight;

//logic
var pageLock = false;

//scroll
var scrollTimeoutStart = new Date().getTime()/1000;
var scrollTimeoutEnd;

//nav
var page = "home";
var navCircle1 = document.querySelector("#navCircle1"),
    navCircle2 = document.querySelector("#navCircle2"),
    navCircle3 = document.querySelector("#navCircle3"),
    navCircle4 = document.querySelector("#navCircle4");
var navCircleArr = [navCircle1,navCircle2,navCircle3,navCircle4];

//colors
var currentColor = "#0000ff";
const blue = "#0534cf";
const yellow = "#d1a212";
const green = "#009659";
const pink = "#ffb6bd";

//body
var rightColor = document.querySelector("#rightColor")
var bodyR = document.querySelector(".bodyRight");
var bodyL = document.querySelector(".bodyLeft");
var rightHTML = document.querySelector(".rightHTML");
var leftHTML = document.querySelector(".leftHTML");

//html
const leftHTMLstr = '<div class="leftHTML"></div>';
const rightHTMLstr = '<div class="rightHTML"></div>';

//about
var svgCircles;

//resume
var skillsObj;
var educationObj;
var workObj;

//contact
var contactObjArr;

//logo
var logoParent = document.querySelector(".logoParent");
var borderString = "";
var logoTextObj = {
    mn: document.querySelector(".logoMain"),
    smile: document.querySelector(".logoSmile"),
    home: "You can hover over me on each page to get details about the page!",
    resume: "resume",
    about: "about",
    contact: "contact"
}