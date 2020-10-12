function pageScrollNavClick(clr, pg, cir){
    rightColor.style.backgroundColor = clr;
    page = pg;
    removeActive();
    addActive(cir);
    findLogicSwitch();
}

function addActive(cir){
    cir.classList.add("navActive");
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