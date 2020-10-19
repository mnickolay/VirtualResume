//main desktop
function aboutLogic(){
    bodyL.innerHTML = aboutLeft;
    bodyR.innerHTML = aboutRight;
    colorBar.style.transform = "skew(0deg)"
    logoTextObj.inner.innerHTML = logoTextObj.about;
    logoTextObj.page.innerText = "About";
    aboutCircleCreation();
}

//main mobile
function mobileAboutLogic(){
    mobileLogoPage.innerText = "About"
    mobileLogoInner.innerHTML = mobileLogoTextObj.about
}