var inputField;
var contactObjArr;
var blinker;
var textCharCounter = 0;
var blinkerVal = 10;
var emptyField = true;
var lockedTypeAnim = false;
var addingLetters;
var removingLetters;
var blinkerInterval;

function contactLogic(){
    leftHTML.innerHTML = contactDesign;
    rightHTML.innerHTML = contactHTML;
    contactObjArr = setContactObjects();
    inputField = document.querySelector("#inputField");
    blinker = document.querySelector("#blinkBar");
    setBlinkerValues()

    blinkerInterval =  setInterval(() => {
        if(blinker.classList.contains("blinkerFade"))
            blinker.classList.remove("blinkerFade")
        else
            blinker.classList.add("blinkerFade")
    }, 500);


    Object.keys(contactObjArr).forEach(function(childObj){
        contactObjArr[childObj].ele.addEventListener("mouseenter", function(){
            if(contactObjArr[childObj].text != inputField.innerText)
                contactTypeLogic(contactObjArr[childObj]);
        })
    })
}

function contactTypeLogic(obj){
    if(emptyField && !lockedTypeAnim){
        emptyField = false;
        clearInterval(removingLetters);
        
        obj.ele.classList.add("activeContact");
        writeContactText(obj);

    }else if(!emptyField && !lockedTypeAnim){
        lockedTypeAnim = true;
        clearInterval(addingLetters);
        removeContactText(obj);
    }
}

function writeContactText(obj){
    addingLetters = setInterval(() =>{
        inputField.innerText += obj.text[textCharCounter];
        blinkerVal += 2.4
        blinker.style.left = blinkerVal + "vw"
        textCharCounter++
        
        if(textCharCounter == obj.text.length){
            clearInterval(addingLetters)
        }
    }, 140)
}

function removeContactText(obj){
    checkForActive();
    removingLetters = setInterval(() =>{
        var letterRemCount = inputField.innerText.length;
        inputField.innerText = inputField.innerText.substr(0, inputField.innerText.length-1);
        blinkerVal -= 2.4;
        blinker.style.left = blinkerVal + "vw";
        letterRemCount--;
        if(inputField.innerText === "" || letterRemCount===0 || blinkerVal === 10)
            finishRemoval(obj);
    }, 100)
}

function finishRemoval(obj){
    clearInterval(removingLetters);
    textCharCounter = 0;
    emptyField = true;
    lockedTypeAnim = false;
    setBlinkerValues();
    contactTypeLogic(obj);
}

function checkForActive(){
    let active = document.querySelector(".activeContact");
    if(active) active.classList.remove("activeContact");
}

function setBlinkerValues(){
    blinker.style.left = "10vw"
    blinkerVal = 10;
}

function setContactObjects(){
    var linkedinObj = {
        ele: linkedinDiv = document.querySelector("#linkedinDiv"),
        text: "LinkedIn",
        fill: "https://www.linkedin.com/in/matthew-nickolay/"
    };
    var githubObj = {
        ele: githubDiv = document.querySelector("#githubDiv"),
        text: "GitHub",
        fill: "https://github.com/mnickolay"
    };
    var emailObj = {
        ele: emailDiv = document.querySelector("#emailDiv"),
        text: "Email",
        fill: "matthew.c.nickolay@gmail.com"
    };
    var phoneObj = {
        ele: phoneDiv = document.querySelector("#phoneDiv"),
        text: "Phone",
        fill: "763-242-2246"
    }

    var contactObjArr = {
        linkedin: linkedinObj,
        github: githubObj,
        email: emailObj,
        phone: phoneObj
    }

    return contactObjArr;
}