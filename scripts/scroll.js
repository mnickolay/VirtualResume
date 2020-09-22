$(window).resize(function(){
    width = window.innerWidth;
    height = window.innerHeight;
});

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) scrollUp();
    else scrollDown();
});

function scrollUp(){
    if(checkScrolltimer()) findSwitch("up");
};

function scrollDown(){
    if(checkScrolltimer()) findSwitch("down");
};

function checkScrolltimer(){
    scrollTimeoutEnd = new Date().getTime()/1000;
    if((scrollTimeoutEnd - 0.4) > scrollTimeoutStart) return true;
};

function resetScroll(){
    scrollTimeoutStart = new Date().getTime()/1000;
}

function findSwitch(scroll){
    switch(page){
        case "home":
            if(scroll=="down"){
                pageScrollNavClick(yellow, "resume", navCircle2);
                resetScroll();
            };
            break;
        case "resume":
            if(scroll=="up")
                pageScrollNavClick(blue, "home", navCircle1);
            else
                pageScrollNavClick(green, "about", navCircle3);
            resetScroll();
            break;
        case "about":
            if(scroll=="up")
                pageScrollNavClick(yellow, "resume", navCircle2);
            else
                pageScrollNavClick(pink, "contact", navCircle4);
            resetScroll();
            break;
        case "contact":
            if(scroll=="up"){
                pageScrollNavClick(green, "about", navCircle3);
                resetScroll();
            };
            break;
    }
}