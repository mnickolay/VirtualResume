//page
var html = document.querySelector("html");
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
var navCircleArr = [navCircle1,navCircle2,navCircle3,navCircle4];

//colors
var currentColor = "#0000ff";
const blue = "#0000ff";
const yellow = "#d1a212";
const green = "#12bb8e";
const pink = "#ffb6bd";

//body
var bodyR = document.querySelector(".bodyRight");
var bodyL = document.querySelector(".bodyLeft");
var htmlFill = document.querySelector("#htmlFill");

//logo
var logoMain = $(".logoMain"),
    borderString = "";

//html
const homeHTML = '';
const resumeHTML = '';
const aboutHTML = '';
const contactHTML = '';

//design
const homeDesign = '';
const resumeDesign = '';
const aboutDesign = '<svg height="100vh" width="100vw" id="svgCircles"></svg>';
const contactDesign = '';

//about
var svgCircles;