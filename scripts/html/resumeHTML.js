const resumeHTML = 
`<div class="resumeDiv">
    <div id="skills">
        <h2 class="resHeader" id="skillsHeader">Skills</h2>
        <div class="resPushRight">
            <div id="languages">
                <div class="langTop resTopItem">
                    <h5 class="langHead resH5 skillsH5">Languages</h5>
                </div>
                <div class="langBottom resBottomItem">
                    <div class="displayer langDisp">
                        <span class="langItem">C#</span>
                        <span class="langItem">JavaScript</span>
                        <span class="langItem">HTML/CSS</span>
                        <span class="langItem">JSON</span>
                        <span class="langItem">XML</span>
                        <span class="langItem">SQL</span>
                        <span class="langItem">noSQL</span>
                    </div>
                </div>
            </div>
            <div id="laf">
                <div class="lafTop resTopItem">
                    <h5 class="lafHead resH5 skillsH5">Libraries and Frameworks</h5>
                </div>
                <div class="lafBottom resBottomItem">
                    <div class="displayer lafDisp">
                        <span class="lafItem">.NET Core</span>
                        <span class="lafItem">jQuery</span>
                        <span class="lafItem">MVC</span>
                        <span class="lafItem">ASP.NET</span>
                        <span class="lafItem">Razor Pages</span>
                        <span class="lafItem">Node.js</span>
                        <span class="lafItem">Express</span>
                        <span class="lafItem">APIs</span>
                        <span class="lafItem">Bootstrap</span>
                        <span class="lafItem">Entity Framework</span>
                        <span class="lafItem">Dapper ORM</span>
                        <span class="lafItem">NUnit</span>
                    </div>
                </div>
            </div>
            <div id="environments">
                <div class="envTop resTopItem">
                    <h5 class="environmentHead resH5 skillsH5">Environments</h5>
                </div>
                <div class="envBottom resBottomItem">
                    <div class="displayer environmentsDisp">
                        <span class="envItem">Visual Studio 2019</span>
                        <span class="envItem">Visual Studio Code</span>
                        <span class="envItem">Sublime</span>
                        <span class="envItem">Command Prompt</span>
                        <span class="envItem">Git Bash</span>
                        <span class="envItem">MongoDB</span>
                        <span class="envItem">SQL Server Management Studio</span>
                    </div>
                </div>
            </div>
            <div id="general">
                <div class="generalTop resTopItem">
                    <h5 class="generalHead resH5 skillsH5">General</h5>
                </div>
                <div class="generalBottom resBottomItem">
                    <div class="displayer generalDisp">
                        <span class="genItem">Full Stack Development</span>
                        <span class="genItem">Object Orientation</span>
                        <span class="genItem">Generics</span>
                        <span class="genItem">Server-side Validation</span>
                        <span class="genItem">REST</span>
                        <span class="genItem">Testing</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>

    <div id="education">
        <h2 class="resHeader" id="educationHeader">Education</h2>
        <div class="resPushRight">
            <div id="eduSWG">
                <div class="SWGTop resTopItem">
                    <h5 class="SWGHead resH5 eduH5">The Software Guild</h5>
                </div>
                <div class="SWGBottom resBottomItem">
                    <div class="displayer" id="SWGDisp">
                        <div class="eduDate" id="SWGDate"></div>
                        <div class="eduInfo" id="SWGInfo"></div>
                    </div>
                </div>
            </div>
            <div id="eduWDB">
                <div class="WDBTop resTopItem">
                    <h5 class="WDBHead resH5 eduH5">The Web Developer Bootcamp</h5>
                </div>
                <div class="WDBBottom resBottomItem">
                    <div class="displayer" id="WDBDisp">
                        <div class="eduDate" id="WDBDate"></div>
                        <div class="eduInfo" id="WDBInfo"></div>
                    </div>
                </div>
            </div>
            <div id="eduDCT">
                <div class="DCTTop resTopItem">
                    <h5 class="DCTHead resH5 eduH5">Dunwoody College of Technology</h5>
                </div>
                <div class="DCTBottom resBottomItem">
                    <div class="displayer" id="DCTDisp">
                        <div class="eduDate" id="DCTDate"></div>
                        <div class="eduInfo" id="DCTInfo"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="work">
        <h2 class="resHeader" id="workHeader">Work</h2>
        <div class="resPushRight">
            <div class="workItem" id="instacart">
                <div class="workTop resTopItem">
                    <h5 class="instacartHead resH5 workH5">Instacart</h5>
                </div>
                <div class="workBottom resBottomItem">
                    <div class="displayer" id="instacartDisp">
                        <div class="workDate" id="instacartDate">06/2020 - Current</div>
                        <div class="workInfo" id="instacartInfo"></div>
                    </div>
                </div>
            </div>
            <div class="workItem" id="synergy">
                <div class="workTop resTopItem">
                    <h5 class="synergyHead resH5 workH5">Synergy Delivery</h5>
                </div>
                <div class="workBottom resBottomItem">
                    <div class="displayer" id="synergyDisp">
                        <div class="workDate" id="synergyDate">08/2019 - 01/2020</div>
                        <div class="workInfo" id="synergyInfo"></div>
                    </div>
                </div>
            </div>
            <div class="workItem" id="gilbert">
                <div class="workTop resTopItem">
                    <h5 class="gilbertHead resH5 workH5">Gilbert Mechanical</h5>
                </div>
                <div class="workBottom resBottomItem">
                    <div class="displayer" id="gilbertDisp">
                        <div class="workDate" id="gilbertDate">05/2020 - 08/2020</div>
                        <div class="workInfo" id="gilbertInfo"></div>
                    </div>
                </div>
            </div>
            <div class="workItem" id="mmc">
                <div class="workTop resTopItem">
                    <h5 class="mmcHead resH5 workH5">Metropolitan Mechanical Contractors</h5>
                </div>
                <div class="workBottom resBottomItem">
                    <div class="displayer" id="mmcDisp">
                        <div class="workDate" id="mmcDate">05/2019 - 08/2019</div>
                        <div class="workInfo" id="mmcInfo"></div>
                    </div>
                </div>
            </div>
            <div class="workItem" id="salut">
                <div class="workTop resTopItem">
                    <h5 class="salutHead resH5 workH5">Salut Bar Americain</h5>
                </div>
                <div class="workBottom resBottomItem">
                    <div class="displayer" id="salutDisp">
                        <div class="workDate" id="salutDate">05/2016 - 11/2019</div>
                        <div class="workInfo" id="salutInfo"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`