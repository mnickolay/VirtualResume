navCircle1.addEventListener("click", function(){
    if(checkScrolltimer()){
        resetScroll();
        if(!this.classList.contains("navActive"))
            pageScrollNavClick(blue, "home", this);
    };
});

navCircle2.addEventListener("click", function(){
    if(checkScrolltimer()){
        resetScroll();
        if(!this.classList.contains("navActive"))
            pageScrollNavClick(yellow, "resume", this);
    };
});

navCircle3.addEventListener("click", function(){
    if(checkScrolltimer()){
        resetScroll();
        if(!this.classList.contains("navActive"))
            pageScrollNavClick(pink, "about", this);
    };
});

navCircle4.addEventListener("click", function(){
    if(checkScrolltimer()){
        resetScroll();
        if(!this.classList.contains("navActive"))
            pageScrollNavClick(green, "contact", this);
    };
});