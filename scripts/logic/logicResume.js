//this.parentElement.nextSibling.nextSibling.children[0].children

function resumeLogic(){
    leftHTML.innerHTML = resumeDesign;
    rightHTML.innerHTML = resumeHTML;

    var skillsH5 = document.querySelectorAll(".skillsH5");
    var eduH5 = document.querySelectorAll(".eduH5");
    var workH5 = document.querySelectorAll(".workH5");
    var h5Arr = [skillsH5,eduH5,workH5];
    var resumeBoxHead = document.querySelector(".resumeBoxHead");
    var resumeBoxBody = document.querySelector(".resumeBoxBody");

    h5Arr.forEach(function(arrItem){
        arrItem.forEach(function(item){
            item.addEventListener("mouseenter", function(){
                var thisItem = this.parentElement.nextSibling.nextSibling.children[0].children;
                var thisResumeHTML = "";
                for(var i=0; i<thisItem.length; i++){
                    thisResumeHTML +='<span class="boxBodyItem';
    
                    if(i%2==0) thisResumeHTML += ' boxBodyItemLeft'
                    else thisResumeHTML += ' boxBodyItemRight'
    
                    thisResumeHTML += '">';
                    thisResumeHTML += thisItem[i].innerText;
                    thisResumeHTML += '</span>';
    
                    if(i%2==0 && i!=0) resumeBoxBody.innerHTML += '<br>';
    
                    resumeBoxBody.innerHTML += thisResumeHTML;
                    thisResumeHTML = "";
                }
                resumeBoxHead.innerHTML = this.innerText
            })
    
            item.addEventListener("mouseleave", function(){
                resumeBoxHead.innerHTML = "";
                resumeBoxBody.innerHTML = "";
            })
        })
    })
    


    
}