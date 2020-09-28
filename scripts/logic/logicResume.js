function resumeLogic(){
    leftHTML.innerHTML = resumeDesign;
    rightHTML.innerHTML = resumeHTML;
    setResumeVariables();

    var resTHead = document.querySelector("#resTHead");
    var resTBody = document.querySelector("#resTBody");
    
    //skills eventlisteners
    Object.keys(skillsObj).forEach(function(childObj){
        objAddEventListeners(skillsObj[childObj]);
    });

    //education eventlisters
    Object.keys(educationObj).forEach(function(childObj){
        objAddEventListeners(educationObj[childObj]);
    });

    //work eventlisteners
    Object.keys(workObj).forEach(function(childObj){
        objAddEventListeners(workObj[childObj]);
    });
}

function objAddEventListeners(obj){
    obj.ele.addEventListener("mouseenter", function(){
        resTHead.innerHTML = objSettingTableHeader(obj);
        
        var tableBodyFill = "<tr>";
        // tableBodyFill += objSettingTableFillDate(obj);
        tableBodyFill += objSettingTableFillArr(obj);
        tableBodyFill += '</tr>';
        resTBody.innerHTML += tableBodyFill;
        tableBodyFill = "";
    });

    obj.ele.addEventListener("mouseleave", function(){
        resTHead.innerHTML="";
        resTBody.innerHTML="";
    });
}

function objSettingTableHeader(obj){
    var thisTableFill = '<tr><th>' +  obj.ele.innerHTML + '</th>';
    if(obj.date != null){
        thisTableFill += '<th id="thDate">' + obj.date + '</th>';
    }
    thisTableFill += '</tr>';
    return thisTableFill;
}

function objSettingTableFillArr(obj){
    var thisTableFill = "";
    for(var i=0; i<obj.arr.length; i++){
        thisTableFill += '<td>' + obj.arr[i] + '</td>';
        if(i%2!=0 && i!=0) thisTableFill += '</tr><tr>';
    }
    if(obj.arr.length%2!=0) thisTableFill += '<td></td>'
    return thisTableFill;
}

function objSettingTableFillDate(obj){
    var thisTableFill = "";
    if(obj.date != null){
        thisTableFill += '<tr><td>' + obj.date + '</td></tr>';
    }
    return thisTableFill;
}

function setResumeVariables(){
    skillsObj = {
        languageObj: {
            ele: document.querySelector(".langHead"),
            arr: ['C#', 'JavaScript', 'HTML/CSS', 'JSON', 'XML', 'SQL', 'noSQL']
        },
        lafObj: {
            ele: document.querySelector(".lafHead"),
            arr: ['.NET Core', 'jQuery', 'MVC', 'ASP.NET', 'Razor Pages', 'Node.js',
            'Express', 'APIs', 'Bootstrap', 'Entity Framework', 'Dapper ORM', 'NUnit']
        },
        environmentObj: {
            ele: document.querySelector(".environmentHead"),
            arr: ['Visual Studio', 'Sublime', 'Command Prompt',
            'Git Bash', 'MongoDB', 'SQL Server Management Studio']
        },
        generalObj: {
            ele:document.querySelector(".generalHead"),
            arr: ['Full Stack Developement', 'Object Orientation', 'Generics',
            'Server Side Validation', 'REST', 'Testing']
        }
    };
    educationObj = {
        TSG: {
            ele: document.querySelector(".SWGHead"),
            date: '01/2020 - 04/2020',
            arr: [
                ''
            ]
        },
        WDB: {
            ele: document.querySelector(".WDBHead"),
            date: '05/2020 - Current',
            arr: [
                ''
            ]
        },
        DCT: {
            ele: document.querySelector(".DCTHead"),
            date: '08/2017 - 05/2019',
            arr: [
                ''
            ]
        }
    };
    workObj = {
        instacart: {
            ele: document.querySelector(".instacartHead"),
            date: '06/2020 - Current',
            arr: [
                ''
            ]
        },
        synergy: {
            ele: document.querySelector(".synergyHead"),
            date: '08/2019 - 01/2020',
            arr: [
                ''
            ]
        },
        gilbert: {
            ele: document.querySelector(".gilbertHead"),
            date: '05/2019 - 08/2020',
            arr: [
                ''
            ]
        },
        mmc: {
            ele: document.querySelector(".mmcHead"),
            date: '05/2018 - 08/2020',
            arr: [
                ''
            ]
        },
        salut: {
            ele: document.querySelector(".salutHead"),
            date: '05/2016 - 11/2019',
            arr: [
                ''
            ]
        }
    };
    resumeObj = {
        skills: skillsObj,
        education: educationObj,
        work: workObj
    };
};