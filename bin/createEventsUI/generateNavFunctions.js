import { loadExampleMaze, generateAddWallFunctions, generateRemoveWallFunctions, clearMap } from "./generateWallFunctions.js";
import { setActiveNavbarItem } from "../handleEventsUI/setActiveNavbarItem.js"
// import { dfsAlgorithm } from "../algorithms/dfsAlgorithm.js";
import { runAlgorithm } from "../algorithms/runAlgorithm.js";
import { generateAlgorithmChoserEventListener } from "./generateAlgorithmChoserEventListener.js";
import { generateFileActionChoserEventListener } from "./generateFileActionChoserEventListener.js";
import { generateMazeGeneratorChoserEventListener } from "./generateMazeGeneratorChoserEventListener.js";

//we need to import the algorithm module afterwards

// Generate Event Listeners for Navbar
function addNavFunctions() {
    
    
    // Event Listener for Wall Generator
    let addWallNodeButton = document.getElementById("addWallButton")
    addWallNodeButton.addEventListener("click", generateAddWallFunctions)
    addWallNodeButton.addEventListener("click", setActiveNavbarItem)  // Sets-unsets active navbar item (active function at the moment)
    
    //Event Listener for Wall Remover
    let removeWallNodeButton = document.getElementById("removeWallButton")
    removeWallNodeButton.addEventListener("click", generateRemoveWallFunctions)
    removeWallNodeButton.addEventListener("click", setActiveNavbarItem)
    
    
    //Event Listener for Clear Map
    let clearMapButton = document.getElementById("clearMapButton")
    clearMapButton.addEventListener("click", clearMap)
    clearMapButton.addEventListener("click", setActiveNavbarItem)
    
    // Event Listener for Run Pathfinder
    let runPathfinderButton = document.getElementById("runButton")
    runPathfinderButton.addEventListener("click", runAlgorithm)
    runPathfinderButton.addEventListener("click", setActiveNavbarItem)
    
    //Add Event Listeners for the Algorithms Choosers
    let algorithmsSelector = document.getElementById("algorithmsSelector")
    algorithmsSelector.addEventListener("click", setActiveNavbarItem)
    algorithmsSelector.addEventListener("click", generateAlgorithmChoserEventListener(algorithmsSelector))
    
    // Add Event Listeners for File Management
    let fileActionsSelector = document.getElementById("filesAction")
    fileActionsSelector.addEventListener("click", setActiveNavbarItem)
    fileActionsSelector.addEventListener("click", generateFileActionChoserEventListener(fileActionsSelector))
    
    
    // Event Listener for Maze Generator
    let loadMazeSelector = document.getElementById("generateMazeSelector")
    loadMazeSelector.addEventListener("click", generateMazeGeneratorChoserEventListener(loadMazeSelector))
    loadMazeSelector.addEventListener("click", setActiveNavbarItem)
    
}



export { addNavFunctions }
