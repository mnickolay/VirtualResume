logoMain.mouseenter(function(){
    logoMain.css("backgroundColor", currentColor)
    logoMain.css("borderColor", currentColor)
});

logoMain.mouseleave(function(){
    logoMain.css("backgroundColor", "transparent")
    logoMain.css("borderColor", "black")
});

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
    ele.css("border-radius", borderString);
    borderString="";
}

function valueFinder(){
    if(rng()) return "40px"
    else return "10px"
}

function rng(){
    return Math.round(Math.random());
}