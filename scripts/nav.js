var navLogoMain = $(".navLogoMain"),
    borderStringMain = "";

setInterval(function(){
    cssBorderRadius(navLogoMain);
}, 300);

// navItemsArr.forEach(function(ele){
//     navStyling(ele);
// })

function navStyling(ele){
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
        borderStringMain+=valueFinder() + " ";
    }
    ele.css("border-radius", borderStringMain);
    borderStringMain="";
}

function valueFinder(){
    if(rng()) return "40px"
    else return "10px"
}

function rng(){
    return Math.round(Math.random());
}