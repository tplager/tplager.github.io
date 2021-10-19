import {ProjectInfo} from "./main.js";

export {projects}; 

let projects = Object.seal({

    project1: {
        firstImage: "images/SolitaryVR1.JPG", 
        secondImage: "images/SolitaryVR2.JPG", 
        name: "Solitary Confinement VR", 
        description: "A VR Experience replicating solitary confinement made for a NSF REU program using Unity and SteamVR", 
        alt1: "Solitary VR Project Screenshot 1", 
        alt2: "Solitary VR Project Screenshot 2", 
        address: "projects/solitaryConfinementVR.html"
    }, 
    project2: {
        firstImage: "images/GenetikoLogo1(black).png", 
        secondImage: "images/GenetikoScreenCap.png", 
        name: "Genetiko", 
        description: "A digital trading card game based on the properties of genetics", 
        alt1: "Genetiko Logo", 
        alt2: "Genetiko Screen Capture", 
        address: "projects/genetiko.html"
    }, 
    project3: {
        firstImage: "images/D&DVisualizerFull.PNG", 
        secondImage: "images/D&DVisualizerDetailed.png", 
        name: "Dungeons & Dragons Class Choice Visualizer", 
        description: "A web-based visualization created using JavaScript and d3.js", 
        alt1: "D&D Class Visualizer Full Screenshot",
        alt2: "D&D Class Visualizer Detailed Screenshot", 
        address: "projects/d&dVisualizer.html"
    }, 
    project4: {
        firstImage: "images/KitchenScene.gif", 
        secondImage: "images/PantryScene.gif", 
        name: "Cooked to Catastrophe", 
        description: "An educational cooking game created to teach players cooking techniques", 
        alt1: "Cooked to Catastrophe Kitchen Scene", 
        alt2: "Cooked to Catastrophe Pantry Scene", 
        address: "projects/cookedToCatastrophe.html"
    }, 
    project5: {
        firstImage: "images/VSSnowmanTitleScreen.png", 
        secondImage: "images/VSSnowmanScreenshot.png", 
        name: "VS Snowman", 
        description: "A 3D First Person Shooter created in 1 week using C# and Unity", 
        alt1: "VS Snowman Title Screen", 
        alt2: "VS Snowman Game Screenshot", 
        address: "projects/vsSnowman.html"
    },
    project6: {
        firstImage: "images/UntexturedSword.PNG", 
        secondImage: "images/TexturedSword.PNG", 
        name: "Daedric Sword", 
        description: "A 3D model of the Daedric Sword from The Elder Scrolls V: Skyrim", 
        alt1: "Untextured Sword", 
        alt2: "Textured Sword", 
        address: "projects/daedricSword.html"
    }
});