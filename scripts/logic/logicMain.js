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
            setTimeout(homeLogic(), 1000);
            break;
        case "resume":
            removeLogic();
            setTimeout(resumeLogic(), 1000);
            break;
        case "about":
            removeLogic();
            aboutLogic();
            break;
        case "contact":
            removeLogic();
            setTimeout(contactLogic(), 1000);
            break;
    }
};

function removeLogic(){
    if(leavingAboutNext){
        leavingAboutNext = false;
        svgCircles.style.opacity = 0;
        setTimeout(function(){
            setNewBodyFaders()
        }, 500);
    }else{
        setNewBodyFaders();
    }
}

function setNewBodyFaders(){
    bodyL.innerHTML = leftHTML;
    bodyR.innerHTML = rightHTML;
}