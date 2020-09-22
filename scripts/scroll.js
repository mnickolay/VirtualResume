var width = window.innerWidth;
var height = window.innerHeight;
var scrollTimeoutStart = new Date().getTime()/1000;
var scrollTimeoutEnd;
var current = "home";

var bodyRight = $(".bodyRight");

console.log(scrollTimeoutStart);

$(window).resize(function(){
    width = window.innerWidth;
    height = window.innerHeight;
})

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) scrollUp();
    else scrollDown();
});

function scrollUp(){
    if(checkScrolltimer()) findSwitch("up");
}

function scrollDown(){
    if(checkScrolltimer()) findSwitch("down");
}

function checkScrolltimer(){
    scrollTimeoutEnd = new Date().getTime()/1000;
    if((scrollTimeoutEnd - 1.5) > scrollTimeoutStart){
        scrollTimeoutStart = new Date().getTime()/1000;
        return true;
    }
}

function findSwitch(scroll){
    switch(current){
        case "home":
            if(scroll=="down") appendBody("resume");
            break;
        case "resume":
            if(scroll=="up") appendBody("home");
            else appendBody("about");
            break;
        case "about":
            if(scroll=="up") appendBody("resume");
            else appendBody("contact");
            break;
        case "contact":
            if(scroll=="up") appendBody("about");
            break;
    }
}

function appendBody(newPage){
    current=newPage;
}

var resumeHTML = '<div class="resumeBody"> <div id="skills"> <h4 id="skillsHeader">Skills</h4> <div class="resPushRight"> <div id="languages"> <div class="langTop resTopItem"> <h5 class="langHead">Languages</h5> </div> <div class="langBottom resBottomItem"> <div class="displayer langDisp" style="display: none;"> <span class="langItem">C#</span> <span class="langItem">JavaScript</span> <span class="langItem">HTML/CSS</span> <span class="langItem">JSON</span> <span class="langItem">XML</span> <span class="langItem">SQL</span> <span class="langItem">noSQL</span> <span class="langItem"></span> </div> </div> </div> <div id="laf"> <div class="lafTop resTopItem"> <h5 class="lafHead">Libraries and Frameworks</h5> </div> <div class="lafBottom resBottomItem"> <div class="displayer lafDisp" style="display: none;"> <span class="lafItem">.NET Core</span> <span class="lafItem">jQuery</span> <span class="lafItem">MVC</span> <span class="lafItem">ASP.NET</span> <span class="lafItem">Razor Pages</span> <span class="lafItem">Node.js</span> <span class="lafItem">Express</span> <span class="lafItem">APIs</span> <span class="lafItem"></span> <span class="lafItem">Bootstrap</span> <span class="lafItem">Entity Framework</span> <span class="lafItem">Dapper ORM</span> <span class="lafItem">NUnit</span> </div> </div> </div> <div id="environments"> <div class="envTop resTopItem"> <h5 class="environmentHead">Environments</h5> </div> <div class="envBottom resBottomItem"> <div class="displayer environmentsDisp" style="display: none;"> <span class="envItem">Visual Studio 2019</span> <span class="envItem">Visual Studio Code</span> <span class="envItem">Sublime</span> <span class="envItem">SQL Server Management Studio</span> <span class="envItem">MongoDB</span> <span class="envItem">Command Prompt</span> <span class="envItem">Git Bash</span> </div> </div> </div> <div id="general"> <div class="generalTop resTopItem"> <h5 class="generalHead">General</h5> </div> <div class="generalBottom resBottomItem"> <div class="displayer generalDisp" style="display: none;"> <span class="genItem">Full Stack Development</span> <span class="genItem">Object Orientation</span> <span class="genItem">Generics</span> <span class="genItem">Server-side Validation</span> <span class="genItem">REST</span> <span class="genItem">Testing</span> <span class="genItem"></span> </div> </div> </div> </div> </div> <div id="education"> <h4 id="educationHeader">Education</h4> <div class="resPushRight"> <div id="eduSWG"> <div class="SWGTop resTopItem"> <h5 class="SWGHead">The Software Guild</h5> </div> <div class="SWGBottom resBottomItem"> <div class="displayer" id="SWGDisp"> <div class="eduDate" id="SWGDate"></div> </div> </div> </div> <div id="eduWDB"> <div class="WDBTop resTopItem"> <h5 class="WDBHead">The Web Developer Bootcamp</h5> </div> <div class="WDBBottom resBottomItem"> <div class="displayer" id="WDBDisp"> <div class="eduDate" id="WDBDate"></div> </div> </div> </div> <div id="eduDCT"> <div class="DCTTop resTopItem"> <h5 class="DCTHead">Dunwoody College of Technology</h5> </div> <div class="DCTBottom resBottomItem"> <div class="displayer" id="DCTDisp"> <div class="eduDate" id="DCTDate"></div> </div> </div> </div> </div> <div id="work"> <h4 id="workHeader">Work</h4> </div> </div> </div>'