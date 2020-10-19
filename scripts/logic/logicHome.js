//main desktop
function homeLogic(){
    bodyL.innerHTML = homeLeft;
    rightHTML.innerHTML = homeRight;
    colorBar.style.transform = "skew(-20deg)"
    logoTextObj.inner.innerHTML = logoTextObj.home
    logoTextObj.page.innerText = "Home";
}

//main mobile
function mobileHomeLogic(){
    mobileBody.innerHTML = mobileHomeHTML
    mobileLogoPage.innerText = "Home"
    mobileLogoInner.innerHTML = mobileLogoTextObj.home
}