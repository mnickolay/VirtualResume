navCircle1.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
        pageScrollNavClick(blue, "home", this);
});

navCircle2.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
        pageScrollNavClick(yellow, "resume", this);
});

navCircle3.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
        pageScrollNavClick(green, "about", this);
});

navCircle4.addEventListener("click", function(){
    if(!this.classList.contains("navActive"))
        pageScrollNavClick(pink, "contact", this);
});