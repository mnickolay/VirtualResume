function desktopStart(){
    currentColor = blue;
    colorBar.style.backgroundColor = currentColor;
    mobileColorBar.style.backgroundColor = currentColor;
    page = "home";
    navCircle1.classList.add("navActive");
    mobileNavCircle1.classList.add("mobileNavActive");
    homeLogic();
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

function addActive(circle){
    let thisMobile = false;
    let navNum = 1;

    if(circle.id.includes("mobile")){
        circle.classList.add("mobileNavActive")
        thisMobile = true
    }else circle.classList.add("navActive")

    for(var i=1; i<=4; i++){
        if(circle.id.includes(i.toString())){
            navNum = i;
            break;
        }
    }

    if(!thisMobile){
        mobileNavCircleArr.forEach((nav) => {
            if(nav.id.includes(navNum.toString()))
                nav.classList.add("mobileNavActive")
        })
    }else{
        navCircleArr.forEach((nav) => {
            if(nav.id.includes(navNum.toString()))
                nav.classList.add("navActive")
        })
    }
}

function removeActive(){
    navCircleArr.forEach(function(cir){
        cir.classList.remove("navActive");
    });
    mobileNavCircleArr.forEach(function(cir){
        cir.classList.remove("mobileNavActive");
    });
};

function findLogicSwitch() {
    if(!displayingMobile) resetRLHTML();
    switch(page){
        case "home":
            if(displayingMobile) homeMobileLogic();
            else homeLogic();
            break;
        case "resume":
            if(displayingMobile) resumeMobileLogic();
            else resumeLogic();
            break;
        case "about":
            if(displayingMobile) aboutMobileLogic();
            else aboutLogic();
            break;
        case "contact":
            if(displayingMobile) contactMobileLogic();
            else contactLogic();
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