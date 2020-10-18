var starting = true;
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
    starting = false
    width = window.innerWidth
    desktop.style.display = "inline"
    logoDiv.style.display = "inline"
    mobile.style.display = "none"
    desktopStart()
}

function lessThan900(){
    starting = false
    width = window.innerWidth
    desktop.style.display = "none"
    logoDiv.style.display = "none"
    mobile.style.display = "inline"
}