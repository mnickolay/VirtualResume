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
    // if(leavingAboutNext){
    //     leavingAboutNext = false;
    //     svgCircles.style.opacity = 0;
    //     setTimeout(function(){
    //         bodyL.innerHTML = leftHTMLstr;
    //     }, 500);
    //     bodyR.innerHTML = rightHTMLstr;
    // }else{
    //     bodyL.innerHTML = leftHTMLstr;
    //     bodyR.innerHTML = rightHTMLstr;
    // }
    resetRLHTML();
}

function resetRLHTML(){
    bodyL.innerHTML = leftHTMLstr;
    bodyR.innerHTML = rightHTMLstr;
    rightHTML = document.querySelector(".rightHTML");
    leftHTML = document.querySelector(".leftHTML");
}