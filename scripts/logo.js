logoMain.addEventListener("mouseenter", () =>{
    logoMain.style.backgroundColor = currentColor;
    logoMain.style.borderColor = currentColor;
})

logoMain.addEventListener("mouseleave", () =>{
    logoMain.style.backgroundColor = "transparent";
    logoMain.style.borderColor = "black";
})

setInterval(function(){
    cssBorderRadius(logoMain);
}, 300);

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