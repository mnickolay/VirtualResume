function pageScrollNavClick(clr, pg, cir){
    currentColor = clr;
    page = pg;
    removeActive();
    addActive(cir);
    findLogicSwitch();
}

function addActive(cir){
    cir.classList.add("navActive");
    bodyR.style.backgroundColor = currentColor;
};

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