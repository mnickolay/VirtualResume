//text fill left side
var inputField;
var inputFieldDetail;
var textHide1;
var textHide2;
var width;
var blinker;
var textCharCounter = 0;
var blinkerVal = 10;

//mobile
var mobileInputField;
var mobileInputFieldDetail;
var mobileTextHide1;
var mobileTextHide2;
var mobileBlinker;
var mobileLinkedinDiv;
var mobileGithubDiv;
var mobileEmailDiv;
var mobilePhoneDiv;

//conditional
var emptyField = true;

//intervals
var addingLetters;
var removingLetters;
var blinkerInterval;

//main desktop
function contactLogic(){
    leftHTML.innerHTML = contactLeft;
    rightHTML.innerHTML = contactRight;
    colorBar.style.transform = "skew(9deg)";
    logoTextObj.inner.innerHTML = logoTextObj.contact;
    logoTextObj.page.innerText = "Contact";

    contactObjArr = setContactObjects()
    setContactElements()
    setBlinkerValues()

    //blinker animation
    blinkerInterval =  setInterval(() => {
        blinker.classList.contains("blinkerFade") 
            ? blinker.classList.remove("blinkerFade")  
            : blinker.classList.add("blinkerFade")
    }, 500)

    //eventlisteners
    Object.keys(contactObjArr).forEach(function(childObj){
        contactObjArr[childObj].ele.addEventListener("mouseenter", function(){
            clearTextIntervals();
            if(contactObjArr[childObj].text != inputField.innerText)
                contactTypeLogic(contactObjArr[childObj]);
        })
    })
}

//main mobile
function mobileContactLogic(){
    mobileBody.innerHTML = mobileContactRight
    mobileLogoPage.innerText = "Contact"
    mobileLogoInner.innerHTML = mobileLogoTextObj.contact

    contactObjArr = setContactObjects()
    setMobileContactElements()

    mobileBlinkerInterval =  setInterval(() => {
        mobileBlinker.classList.contains("blinkerFade") 
            ? mobileBlinker.classList.remove("blinkerFade")  
            : mobileBlinker.classList.add("blinkerFade")
    }, 500);

    Object.keys(contactObjArr).forEach(function(childObj){
        contactObjArr[childObj].mobileEle.addEventListener("mouseup", function(){
            clearTextIntervals();
            clearAndSetMobileContactStyle(this)
            if(contactObjArr[childObj].text != inputField.innerText)
                contactTypeLogic(contactObjArr[childObj]);
        })
    })
}

function clearTextIntervals(){
    clearInterval(addingLetters);
    clearInterval(removingLetters);
}

function clearAndSetMobileContactStyle(ele){
    Object.keys(contactObjArr).forEach(function(childObj){
        contactObjArr[childObj].mobileEle.classList.remove("mobileActiveContact")
    })
    ele.classList.add("mobileActiveContact")
}

function contactTypeLogic(obj){
    if(emptyField){
        emptyField = false;
        clearInterval(removingLetters);
        
        obj.ele.classList.add("activeContact");
        writeContactText(obj);

    }else{
        lockedTypeAnim = true;
        textHideAnimation()
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
            showTextDetail(obj)
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

function showTextDetail(obj){
    inputFieldDetail.innerHTML = obj.fill;
    width = (inputFieldDetail.clientWidth/window.innerWidth) * 100;
    textShowAnimation(width)
}

function textShowAnimation(width){
    textHide1.style.width = "0.1vw"
    textHide1.style.left = (width+10.25) + "vw";
    textHide2.style.left = (width+10.25) + "vw"
    textHide2.style.width = "0vw"
}

function textHideAnimation(){
    textHide2.classList.remove("transitionDelay")
    textHide1.style.left = "10vw"
    textHide2.style.left = "10vw"
    textHide2.style.width = "42vw"
}

function checkForActive(){
    let active = document.querySelector(".activeContact");
    if(active) active.classList.remove("activeContact");
}

function setBlinkerValues(){
    blinker.style.left = "10vw"
    blinkerVal = 10;
}

function setContactElements(){
    inputField = document.querySelector("#inputField");
    inputFieldDetail = document.querySelector("#inputFieldDetail");
    textHide1 = document.querySelector("#textHide1");
    textHide2 = document.querySelector("#textHide2");
    blinker = document.querySelector("#blinkBar");
}

function setMobileContactElements(){
    mobileInputField = document.querySelector("#mobileInputField");
    mobileInputFieldDetail = document.querySelector("#mobileInputFieldDetail");
    mobileTextHide1 = document.querySelector("#mobileTextHide1");
    mobileTextHide2 = document.querySelector("#mobileTextHide2");
    mobileBlinker = document.querySelector("#mobileBlinkBar");
}

function setContactObjects(){
    var linkedinObj = {
        ele: linkedinDiv = document.querySelector("#linkedinDiv"),
        mobileEle: mobileLinkedinDiv = document.querySelector("#mobileLinkedinDiv"),
        text: "LinkedIn",
        fill: "<a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/matthew-nickolay/'>https://www.linkedin.com/in/matthew-nickolay/</a>"
    };
    var githubObj = {
        ele: githubDiv = document.querySelector("#githubDiv"),
        mobileEle: mobileGithubDiv = document.querySelector("#mobileGithubDiv"),
        text: "GitHub",
        fill: "<a target='_blank' rel='noopener noreferrer' href='https://github.com/mnickolay'>https://github.com/mnickolay</a>"
    };
    var emailObj = {
        ele: emailDiv = document.querySelector("#emailDiv"),
        mobileEle: mobileEmailDiv = document.querySelector("#mobileEmailDiv"),
        text: "Email",
        fill: "matthew.c.nickolay@gmail.com"
    };
    var phoneObj = {
        ele: phoneDiv = document.querySelector("#phoneDiv"),
        mobileEle: mobilePhoneDiv = document.querySelector("#mobilePhoneDiv"),
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