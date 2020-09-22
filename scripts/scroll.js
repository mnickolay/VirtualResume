$(window).resize(function(){
    width = window.innerWidth;
    height = window.innerHeight;
})

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) scrollUp();
    else scrollDown();
});

function scrollUp(){
    if(checkScrolltimer()) findSwitch("up");
}

function scrollDown(){
    if(checkScrolltimer()) findSwitch("down");
}

function checkScrolltimer(){
    scrollTimeoutEnd = new Date().getTime()/1000;
    if((scrollTimeoutEnd - 1) > scrollTimeoutStart){
        return true;
    }
}

function findSwitch(scroll){
    switch(page){
        case "home":
            if(scroll=="down") appendBody("resume");
            break;
        case "resume":
            if(scroll=="up") appendBody("home");
            else appendBody("about");
            break;
        case "about":
            if(scroll=="up") appendBody("resume");
            else appendBody("contact");
            break;
        case "contact":
            if(scroll=="up") appendBody("about");
            break;
    }
}

function appendBody(newPage){
    scrollTimeoutStart = new Date().getTime()/1000;
    page=newPage;
}