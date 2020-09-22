function pageScrollNavClick(clr, pg, cir){
    currentColor = clr;
    page = pg;
    removeActive();
    addActive(cir);
    appendBody(pg);
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

function appendBody(newPage) {
    page = newPage;
};