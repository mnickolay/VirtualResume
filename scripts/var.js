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
const green = "#12bb8e";
const pink = "#ffb6bd";

//body
var bodyR = document.querySelector(".bodyRight");
var bodyL = document.querySelector(".bodyLeft");
var rightHTML = document.querySelector(".rightHTML");
var leftHTML = document.querySelector(".leftHTML");

//logo
var logoMain = $(".logoMain"),
    borderString = "";

//html
const leftHTMLstr = '<div class="leftHTML"></div>';
const rightHTMLstr = '<div class="rightHTML"></div>';

//about
var svgCircles;
var leavingAboutNext = false;

//resume
var langHead = document.querySelector(".langHead");
var lafHead = document.querySelector(".lafHead");
var environmentHead = document.querySelector(".environmentHead");
var generalHead = document.querySelector(".generalHead");
var SWGHead = document.querySelector(".SWGHead");
var WDBHead = document.querySelector(".WDBHead");
var DCTHead = document.querySelector(".DCTHead");
var instacartHead = document.querySelector(".instacartHead");
var synergyHead = document.querySelector(".synergyHead");
var gilbertHead = document.querySelector(".gilbertHead");
var mmcHead = document.querySelector(".mmcHead");
var salutHead = document.querySelector(".salutHead");