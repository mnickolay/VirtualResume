function resumeLogic(){
    leftHTML.innerHTML = resumeDesign;
    rightHTML.innerHTML = resumeHTML;
    setResumeVariables();

    var resTHead = document.querySelector("#resTHead");
    var resTBody = document.querySelector("#resTBody");
    
    //skills eventlisteners
    Object.keys(skillsObj).forEach(function(childObj){
        var obj = skillsObj[childObj];
        objAddEventListeners(obj);
    });

    //education eventlisters
    Object.keys(educationObj).forEach(function(childObj){
        var obj = educationObj[childObj];
        objAddEventListeners(obj);
    });

    //work eventlisteners
    Object.keys(workObj).forEach(function(childObj){
        var obj = workObj[childObj];
        objAddEventListeners(obj);
    });
}

function objRemoveActiveClass(){
    var resActive = document.querySelector(".resActive");
    if(resActive) resActive.classList.remove("resActive");
}

function objAddEventListeners(obj){
    obj.ele.addEventListener("mouseenter", function(){
        objRemoveActiveClass();

        this.classList.add("resActive");
        resTHead.innerHTML="";
        resTBody.innerHTML="";
        resTHead.innerHTML = objSettingTableHeader(obj);
        
        var tableBodyFill = "<tr>";
        tableBodyFill += objSettingTableFillArr(obj);
        tableBodyFill += '</tr>';
        resTBody.innerHTML += tableBodyFill;
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
        thisTableFill += '<td';
        if(i%2!=0) thisTableFill += ' id="tdRight"'
        thisTableFill += '>' + obj.arr[i] + '</td>';
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
                'Intensive and challenging, The Software Guild has students coding 60 hours a week to develop full-stack  programming abilities.',
                'Developed a C# banking software that saves customer account information with three different account types,  each with varying rulesets. Required dependency injection, interfaces, and three layers with models.',
                'Built a  software program in Visual Studio that took in and saved order information for a flooring company to unique  file locations depending on the order date. Implemented an SQL Server to store data and write to the program.',
                'Designed a website for a restaurant and for a virtual vending machine that used an online server with applicable  items. Both were designed with and used an extensive amount of CSS, Bootstrap, and JavaScript.',
                'Utilized and became proficient with GitHub, SQL Server Mgmt Studio, and IDEs.'
            ]
        },
        WDB: {
            ele: document.querySelector(".WDBHead"),
            date: '05/2020 - Current',
            arr: [
                '',
                '',
                '',
                ''
            ]
        },
        DCT: {
            ele: document.querySelector(".DCTHead"),
            date: '08/2017 - 05/2019',
            arr: [
                '',
                '',
                '',
                ''
            ]
        }
    };
    workObj = {
        instacart: {
            ele: document.querySelector(".instacartHead"),
            date: '06/2020 - Current',
            arr: [
                '',
                '',
                '',
                ''
            ]
        },
        synergy: {
            ele: document.querySelector(".synergyHead"),
            date: '08/2019 - 01/2020',
            arr: [
                '',
                '',
                '',
                ''
            ]
        },
        gilbert: {
            ele: document.querySelector(".gilbertHead"),
            date: '05/2019 - 08/2020',
            arr: [
                '',
                '',
                '',
                ''
            ]
        },
        mmc: {
            ele: document.querySelector(".mmcHead"),
            date: '05/2018 - 08/2020',
            arr: [
                '',
                '',
                '',
                ''
            ]
        },
        salut: {
            ele: document.querySelector(".salutHead"),
            date: '05/2016 - 11/2019',
            arr: [
                '',
                '',
                '',
                ''
            ]
        }
    };
};