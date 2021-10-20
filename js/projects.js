import {ProjectInfo} from "./main.js";

export {projects}; 

let projects = Object.seal({
    project1: {
        firstImage: "images/ShatteringSwords_1.jpg", 
        secondImage: "images/ShatteringSwords_2.jpg", 
        name: "The Shattering Swords", 
        description: "A 3D Third Person action game developed as my Graduate Capstone Project", 
        alt1: "The Shattering Swords Logo", 
        alt2: "The Shattering Swords Screenshot", 
        address: "projects/shatteringSwords.html"
    },
    project2: {
        firstImage: "images/SolitaryVR_1.jpg", 
        secondImage: "images/SolitaryVR_2.jpg", 
        name: "Solitary Confinement VR", 
        description: "A VR Experience replicating solitary confinement made for a NSF REU program using Unity and SteamVR", 
        alt1: "Solitary VR Project Screenshot 1", 
        alt2: "Solitary VR Project Screenshot 2", 
        address: "projects/solitaryConfinementVR.html"
    }, 
    project3: {
        firstImage: "images/Genetiko_1.png", 
        secondImage: "images/Genetiko_2.jpg", 
        name: "Genetiko", 
        description: "A digital trading card game based on the properties of genetics", 
        alt1: "Genetiko Logo", 
        alt2: "Genetiko Screen Capture", 
        address: "projects/genetiko.html"
    }, 
    project4: {
        firstImage: "images/D&DVisualizer_1.jpg", 
        secondImage: "images/D&DVisualizer_2.jpg", 
        name: "Dungeons & Dragons Class Choice Visualizer", 
        description: "A web-based visualization created using JavaScript and d3.js", 
        alt1: "D&D Class Visualizer Full Screenshot",
        alt2: "D&D Class Visualizer Detailed Screenshot", 
        address: "projects/d&dVisualizer.html"
    }, 
    project5: {
        firstImage: "images/CookedToCatastrophe_1.jpg", 
        secondImage: "images/CookedToCatastrophe_2.jpg", 
        name: "Cooked to Catastrophe", 
        description: "An educational cooking game created to teach players cooking techniques", 
        alt1: "Cooked to Catastrophe Kitchen Scene", 
        alt2: "Cooked to Catastrophe Pantry Scene", 
        address: "projects/cookedToCatastrophe.html"
    }, 
    project6: {
        firstImage: "images/VSSnowman_1.jpg", 
        secondImage: "images/VSSnowman_2.jpg", 
        name: "VS Snowman", 
        description: "A 3D First Person Shooter created in 1 week using C# and Unity", 
        alt1: "VS Snowman Title Screen", 
        alt2: "VS Snowman Game Screenshot", 
        address: "projects/vsSnowman.html"
    },
});