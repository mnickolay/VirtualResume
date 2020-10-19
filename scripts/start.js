var starting = true;
setViews(); 
appStart();

window.onresize = appStart;

function appStart(){
    if(!starting){
        if(window.innerWidth >= 900 && width < 900) greaterThan900()
        else if(window.innerWidth < 900 && width >= 900) lessThan900()
    }else{
        if(window.innerWidth >= 900) greaterThan900()
        else lessThan900()
    }
}

function greaterThan900(){
    width = window.innerWidth
    desktop.style.display = "inline"
    logoDiv.style.display = "inline"
    mobile.style.display = "none"
    if(starting) desktopStart()
    starting = false
}

function lessThan900(){
    width = window.innerWidth
    desktop.style.display = "none"
    logoDiv.style.display = "none"
    mobile.style.display = "inline"
    starting = false
}

function setViews(){
    desktopStart();
    mobile.style.display = "none"
    desktop.style.display = "none"
}