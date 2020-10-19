//main desktop
function aboutLogic(){
    bodyL.innerHTML = aboutDesign;
    bodyR.innerHTML = aboutHTML;
    colorBar.style.transform = "skew(0deg)"
    logoTextObj.inner.innerHTML = logoTextObj.about;
    logoTextObj.page.innerText = "About";
    aboutCircleCreation();
}

//main mobile
function mobileAboutLogic(){
    mobileLogoPage.innerText = "About"
    mobileLogoInner.innerHTML = logoTextObj.about
}