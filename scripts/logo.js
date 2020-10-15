var logoTimer;

logoParent.addEventListener("mouseenter", () =>{
    logoParent.style.backgroundColor = currentColor;
    logoParent.style.borderColor = currentColor;
    logoTextObj.smile.style.opacity = "1"
    logoTextObj.mn.style.opacity = "0"

    // logoTimer = setTimeout(function(){
    //     let logoText = getLogoText()
    //     logoParent.innerHTML += logoText
    // }, 600)
})

logoParent.addEventListener("mouseleave", () =>{
    clearTimeout(logoTimer);
    logoParent.style.backgroundColor = "transparent";
    logoParent.style.borderColor = "black";
    logoTextObj.smile.style.opacity = "0"
    logoTextObj.mn.style.opacity = "1"
})

setInterval(function(){
    cssBorderRadius(logoParent);
}, 300);

function getLogoText(){
    for(const [key, value] of Object.entries(logoTextObj)){
        if(page == key)
            return "<span id='logoText'>" + value + "</span>"
    }
    
}

function logoStyling(ele){
    ele.mouseenter(function(){
        eleInterval(ele);
    });
    if(!active){
        ele.mouseleave(function(){
            clearInterval(interval);
            resetBorder(ele);
        })
    }
}

function eleInterval(ele){
    interval = setInterval(function(){
        cssBorderRadius(ele);
    }, 500)
}

function resetBorder(ele){
    ele.css("border-radius", "5px")
}

function cssBorderRadius(ele){
    for(var i=0; i<4; i++){
        borderString+=valueFinder() + " ";
    }
    ele.style.borderRadius = borderString;
    borderString="";
}

function valueFinder(){
    if(rng()) return "40px"
    else return "10px"
}

function rng(){
    return Math.round(Math.random());
}