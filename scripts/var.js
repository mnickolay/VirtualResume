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
var skillsObj = {
    langArr: ['C#', 'JavaScript', 'HTML/CSS', 'JSON', 'XML', 'SQL', 'noSQL'],
    lafArr: ['.NET Core', 'jQuery', 'MVC', 'ASP.NET', 'Razor Pages', 'Node.js',
             'Express', 'APIs', 'Bootstrap', 'Entity Framework', 'Dapper ORM', 'NUnit'],
    environmentsArr: ['Visual Studio', 'Sublime', 'Command Prompt',
                      'Git Bash', 'MongoDB', 'SQL Server Management Studio'],
    generalArr: ['Full Stack Developement', 'Object Orientation', 'Generics',
                  'Server Side Validation', 'REST', 'Testing']
};
var educationObj = {
    TSG: {
        eduDate: '01/2020 - 04/2020',
        eduDescriptionArr: [
            ''
        ]
    },
    WDB: {
        eduDate: '05/2020 - Current',
        eduDescriptionArr: [
            ''
        ]
    },
    DCT: {
        eduDate: '08/2017 - 05/2019',
        eduDescriptionArr: [
            ''
        ]
    }
};
var workObj = {
    instacart: {
        workDate: '06/2020 - Current',
        workDescription: ''
    },
    synergy: {
        workDate: '08/2019 - 01/2020',
        workDescription: ''
    },
    gilbert: {
        workDate: '05/2019 - 08/2020',
        workDescription: ''
    },
    mmc: {
        workDate: '05/2018 - 08/2020',
        workDescription: ''
    },
    salut: {
        workDate: '05/2016 - 11/2019',
        workDescription: ''
    }
};
const resumeObj = {
    skills: skillsObj,
    education: educationObj,
    work: workObj
};