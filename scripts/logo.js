var logoTimer;
var logoIntervalArr = [];

logoParent.addEventListener("mouseenter", () =>{
    logoIntervalArr.push(logoTimer = setInterval(() => {
        logoParent.style.backgroundColor = currentColor;
        logoParent.style.height = findLogoHeight() + "vw";
    }, 100));
    
    logoParent.style.borderColor = "#f0f0f0";
    logoTextObj.smile.style.opacity = "1";
    logoTextObj.mn.style.opacity = "0";
    logoTextObj.circle.style.border = "1px solid transparent";
})

logoParent.addEventListener("mouseleave", () =>{
    // clearInterval(logoTimer)
    logoIntervalArr.map((thisInt) => {
        clearInterval(thisInt)
        arr = []
    })
    logoParent.style.backgroundColor = "transparent";
    logoParent.style.borderColor = "transparent";
    logoParent.style.height = "12vw";
    logoTextObj.smile.style.opacity = "0";
    logoTextObj.mn.style.opacity = "1";
    logoTextObj.circle.style.border = "1px solid black";
})

setInterval(function(){
    cssBorderRadius(logoParent);
}, 300);

function findLogoHeight(){
    let count = 0;
    let thisEle = logoTextObj.inner.childNodes;
    thisEle.forEach((item) => {
        count += item.clientHeight + (window.innerHeight/19)
    })
    count = (count/window.innerWidth) * 100
    return count;
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
    if(rng()) return "30px"
    else return "5px"
}

function rng(){
    return Math.round(Math.random());
}