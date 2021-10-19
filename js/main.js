import {projects} from "./projects.js";
export {ProjectInfo}; 

let leftArrow; 
let rightArrow; 

let projectPictures; 
let projectName; 
let projectDescription;
let projectLinks; 

let canvas, ctx; 

let currentIndex = 0; 

let NUM_PROJECTS = 6;

let projectInfos = [NUM_PROJECTS]; 

let reducingOpacity; 

let prevTime; 

let projectAddress; 

window.onload = function(){
    //document.querySelector("#displayContactForm").addEventListener("click", displayContactForm);
    
    init();
}

window.onresize = function() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    fillCircles(); 
}

//function displayContactForm(){
//    document.querySelector("#contactForm").style.display = "block";
//    document.querySelector("iframe").style.display = "block";
//    document.querySelector("iframe").style.width = "100%";
//    document.querySelector("iframe").style.height = "100%";
//    document.querySelector("iframe").style.overflowX = "hidden";
//}

function init() {
    if (sessionStorage.currentProjectIndex) {
        currentIndex = Number(sessionStorage.currentProjectIndex); 
    }
    else { currentIndex = 0; }
    
    reducingOpacity = false;
    
    leftArrow = document.querySelector("#left-arrow"); 
    rightArrow = document.querySelector("#right-arrow"); 
    
    leftArrow.addEventListener('click', moveProjectsLeft); 
    rightArrow.addEventListener('click', moveProjectsRight); 
    
    projectPictures = document.querySelectorAll(".project-picture");
    projectName = document.querySelector("#project-name"); 
    projectDescription = document.querySelector("#project-description");
    
    projectLinks = document.querySelectorAll(".project-link");
    
    for (let p of projectLinks) {
        p.addEventListener('click', function() 
            {
                sessionStorage.setItem("currentProjectIndex", currentIndex);
            }); 
    }
    
    canvas = document.querySelector("canvas"); 
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx = canvas.getContext("2d"); 
         
    fillCircles(); 
    
    for (let i = 0; i < NUM_PROJECTS; i++) {
        let project = projects["project" + (i + 1)];
        
        projectInfos[i] = new ProjectInfo(project.firstImage, project.secondImage, project.name, project.description, project.alt1, project.alt2, project.address); 
    }
    
    projectAddress = projectInfos[0].address;
    
    prevTime = Date.now(); 
    
    switchProject(); 
    
    update(); 
}

function fillCircles() {
    ctx.strokeStyle = "#292b2c"; 
    ctx.lineWidth = 3; 
    
    for (let i = 0; i < NUM_PROJECTS; i++) {
        if (i == currentIndex) ctx.fillStyle = "lightgray"; 
        else ctx.fillStyle = "white";

        ctx.beginPath(); 
        ctx.arc(canvas.width/NUM_PROJECTS * (i + 0.5), canvas.height/2, 5, 0, 2 * Math.PI); 
        ctx.closePath(); 
        ctx.stroke(); 
        ctx.fill();  
    }
}

function moveProjectsLeft() {
    currentIndex--; 
    if (currentIndex < 0) currentIndex = NUM_PROJECTS - 1; 
    
    fillCircles(); 
    
    reducingOpacity = true;
}

function moveProjectsRight() {
    currentIndex++; 
    if (currentIndex == NUM_PROJECTS) currentIndex = 0; 
    
    fillCircles(); 
    
    reducingOpacity = true;
}

function update() {
    requestAnimationFrame(update); 
    if (reducingOpacity) {
        for (let p of projectPictures) {
            p.style.opacity -= (Date.now() - prevTime)/300;
        }
    }
    else if (!reducingOpacity && projectPictures[0].style.opacity < 1) {
        for (let p of projectPictures) {
            p.style.opacity = parseFloat(p.style.opacity) + (Date.now() - prevTime)/800;
        }
    } 
    
    if (projectPictures[0].style.opacity <= 0) {
        reducingOpacity = false;
        
        switchProject(); 
    }
    
    if (projectPictures[0].style.opacity >= 1) {
        for (let p of projectPictures) {
            p.style.opacity = 1; 
        }
    }
    
    prevTime = Date.now(); 
}

function switchProject() {
    projectAddress = projectInfos[currentIndex].address;
    
    for (let i = 0; i < projectPictures.length; i++) {
        projectPictures[i].src = projectInfos[currentIndex].projectPictures[i]; 
        projectPictures[i].alt = projectInfos[currentIndex]["alt" + (i + 1)];
        
        projectLinks[i].href = projectAddress;
    }
    
    console.log("Switching");
    projectDescription.innerText = projectInfos[currentIndex].description;
    
    projectName.innerText = projectInfos[currentIndex].name; 
}

class ProjectInfo {
    constructor(firstImage, secondImage, name, description, alt1, alt2, address) {
        this.projectPictures = [];
        this.projectPictures[0] = firstImage; 
        this.projectPictures[1] = secondImage; 
        this.name = name;
        this.description = description; 
        this.alt1 = alt1; 
        this.alt2 = alt2; 
        this.address = address;
    }
}