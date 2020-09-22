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
    switch(page){
        case "home":
            removeLogic();
            homeLogic();
            break;
        case "resume":
            removeLogic();
            resumeLogic();
            break;
        case "about":
            removeLogic();
            aboutLogic();
            break;
        case "contact":
            removeLogic();
            contactLogic();
            break;
    }
};

function removeLogic(){
    bodyL.innerHTML = "";
    bodyR.innerHTML = "";
    htmlFill.innerHTML = "";
}

function homeLogic(){
    
}

function resumeLogic(){
    
}

function aboutLogic(){
    bodyL.innerHTML = aboutDesign;
    aboutCircleCreation();
}

function contactLogic(){
    
}