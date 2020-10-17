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
    page: document.querySelector(".logoPage"),
    mn: document.querySelector(".logoMain"),
    smile: document.querySelector(".logoSmile"),
    circle: document.querySelector(".logoCircle"),
    inner: document.querySelector(".logoInner"),
    home: "<p>You can hover over me on each page to get details about the page!</p>" +
          "<p>This website was built by me using only HTML, CSS, and JavaScipt— no jQuery or BootStrap!</p>" +
          "<p>Animations use the @keyframes CSS rule.</p>" +
          "<p>Everything runs off of one HTML page and is updated when a new page is requested upon arrow key press, scroll, or click on the nav.</p>",
    resume: "<p>The resume categories can be hovered over to show details.</p>" +
            "<p>The left side of the page is populated with a JS object based on the hovered element.</p>" +
            "<p>Each object has an HTML element, a title, and an array of information for the lower table.</p>",
    about: "<p>The most interesting part of this page is the circles that are populated in the background.</p>" +
           "<p>Every time this page is visited, 7 circle objects are made with random values for their X and Y coordinates and radius.</p>" +
           "<p>They each follow the mouse at a different rate.</p>",
    contact: "<p>This contact page runs similarily to the resume page with each object having a HTML element, title, and information.</p>" +
             "<p>Hovering over an element will begin an interval to write out the title and push the blinker a set amount.</p>" +
             "<p>Once typed, the information is show by setting the width of a white bar to 0 and left position of a bar to the text's length over one second.</p>"
}