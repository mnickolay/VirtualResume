function desktopStart(){
    currentColor = blue;
    colorBar.style.backgroundColor = currentColor;
    mobileColorBar.style.backgroundColor = currentColor;
    page = "home";
    navCircle1.classList.add("navActive");
    mobileNavCircle1.classList.add("mobileNavActive");
    homeLogic();
    mobileHomeLogic();
}

function pageScrollNavClick(clr, pg, cir){
    currentColor = clr;
    page = pg;
    colorBar.style.backgroundColor = currentColor;
    mobileColorBar.style.backgroundColor = currentColor;
    removeActive();
    addActive(cir);
    findLogicSwitch();
}

function findLogicSwitch() {
    resetRLHTML();
    switch(page){
        case "home":
            mobileHomeLogic();
            homeLogic();
            break;
        case "resume":
            mobileResumeLogic();
            resumeLogic();
            break;
        case "about":
            mobileAboutLogic();
            aboutLogic();
            break;
        case "contact":
            mobileContactLogic();
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