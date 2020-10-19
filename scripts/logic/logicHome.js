//main desktop
function homeLogic(){
    bodyL.innerHTML = homeDesign;
    rightHTML.innerHTML = homeHTML;
    colorBar.style.transform = "skew(-20deg)"
    logoTextObj.inner.innerHTML = logoTextObj.home
    logoTextObj.page.innerText = "Home";
}

//main mobile
function mobileHomeLogic(){
    mobileLogoPage.innerText = "Home"
    mobileLogoInner.innerHTML = logoTextObj.home
}