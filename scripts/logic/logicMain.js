function desktopStart(){
    currentColor = blue;
    rightColor.style.backgroundColor = blue;
    page = "home";
    navCircle1.classList.add("navActive");
    homeLogic();
}

function pageScrollNavClick(clr, pg, cir){
    rightColor.style.backgroundColor = clr;
    currentColor = clr;
    page = pg;
    removeActive();
    cir.classList.add("navActive");
    findLogicSwitch();
}

function removeActive(){
    navCircleArr.forEach(function(cir){
        cir.classList.remove("navActive");
    });
};

function findLogicSwitch() {
    resetRLHTML();
    switch(page){
        case "home":
            homeLogic();
            break;
        case "resume":
            resumeLogic();
            break;
        case "about":
            aboutLogic();
            break;
        case "contact":
            contactLogic();
            break;
    }
};

function resetRLHTML(){
    bodyL.innerHTML = leftHTMLstr;
    bodyR.innerHTML = rightHTMLstr;
    rightHTML = document.querySelector(".rightHTML");
    leftHTML = document.querySelector(".leftHTML");
    clearInterval(blinkerInterval)
}