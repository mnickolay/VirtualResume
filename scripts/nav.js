//click
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

//hover
navCircle1.addEventListener("mouseenter", function(){
    this.children[0].innerText = "Home";
});

navCircle1.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});


navCircle2.addEventListener("mouseenter", function(){
    this.children[0].innerText = "Resume";
});

navCircle2.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});

navCircle3.addEventListener("mouseenter", function(){
    this.children[0].innerText = "About";
});

navCircle3.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});

navCircle4.addEventListener("mouseenter", function(){
    this.children[0].innerText = "Contact";
});

navCircle4.addEventListener("mouseleave", function(){
    this.children[0].innerText = "";
});