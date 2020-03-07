//Change File Name to generateNavbarFunctions
import { mouseDownWallEvent, mouseMoveWallEvent, mouseUpWallEvent, clickAddWallEvent } from "../handleEventsUI/addWallEvents.js";
import { mouseDownRemoveWallEvent, mouseMoveRemoveWallEvent, mouseUpRemoveWallEvent, clickRemoveWallEvent } from "../handleEventsUI/removeWallEvents.js";
import {createStartPoint, createEndPoint } from "../generategrid/createStartEndPoints.js"
import { startEndEventListeners } from "./startEndEventListeners.js";
import { dragOver, dragEnter, dragLeave, dragDrop } from "../handleEventsUI/handleCriticalPoints.js" 
import { createNodeDragEvent } from "./createNodeDragEvents.js"



// Clear and Generate all Required Event Listeners 

// Add Wall Node Event Listeners
function generateAddWallFunctions() {
    // Replacing every other event Listener for preventing interference with mousedown events (Remove Wall Node vs Add Wall Node)
    let grid = document.getElementById("grid").childNodes
    // let startPoint = document.getElementById("startPoint");
    grid.forEach(row => {
        row.childNodes.forEach(node => {
            let cleanNode = node.cloneNode(true)
            //createNodeDragEvent(cleanNode)
            //This 4 lines can be refactored
            cleanNode.addEventListener("mousedown", mouseDownWallEvent)
            cleanNode.addEventListener("mousemove", mouseMoveWallEvent)
            cleanNode.addEventListener("mouseup", mouseUpWallEvent)
            cleanNode.addEventListener("click", clickAddWallEvent)
            let replacedNode = node.parentNode.replaceChild(cleanNode, node)
        });
    });
    //Add StartPoint and EndPoint Event Listeners!!
    let startPoint = document.getElementById("startPoint")
    let endPoint = document.getElementById("endPoint")
    startEndEventListeners(startPoint);
    startEndEventListeners(endPoint);
}

// Remove Wall Node Event Listeners
function generateRemoveWallFunctions() {
    // Replacing every other event Listener for preventing interference with mousedown events (Remove Wall Node vs Add Wall Node)
    let grid = document.getElementById("grid").childNodes
    grid.forEach(row => {
        row.childNodes.forEach(node => {
            let cleanNode = node.cloneNode(true)
            cleanNode.addEventListener("mousedown", mouseDownRemoveWallEvent)
            cleanNode.addEventListener("mousemove", mouseMoveRemoveWallEvent)
            cleanNode.addEventListener("mouseup", mouseUpRemoveWallEvent)
            cleanNode.addEventListener("click", clickRemoveWallEvent)
            let replacedNode = node.parentNode.replaceChild(cleanNode, node)
        });
    });
}


// Clear Map Event Function
function clearMap() {
    let grid = document.getElementById("grid").childNodes
    grid.forEach(row => {
        row.childNodes.forEach(node => {
            let cleanNode = node.cloneNode(true)
            cleanNode.setAttribute("class", "node")
            cleanNode.setAttribute("draggable", false)
            cleanNode.classList.add("empty")
            let replacedNode = node.parentNode.replaceChild(cleanNode, node)
            createNodeDragEvent(cleanNode)
        });
    });

    let startPoint = document.getElementById("startPoint")
    startPoint.parentElement.classList.replace("empty", "filled")
    let endPoint = document.getElementById("endPoint")
    endPoint.parentElement.classList.replace("empty", "filled")
    startEndEventListeners(startPoint);
    startEndEventListeners(endPoint);
}



// To be Erased

// Load Example Maze
function loadExampleMaze() {

    // Clear Map 1st to load raw data
    clearMap();

    //These whole lines can be refactored
    let oldStartPoint = document.getElementById("startPoint")
    oldStartPoint.remove(1);
    let oldEndPoint = document.getElementById("endPoint")
    oldEndPoint.remove(1);
    const newStartPoint = createStartPoint(7,0)
    const newEndPoint = createEndPoint(0,7)
    // Check generateGrid.js to refactor in the future
    startEndEventListeners(newStartPoint);
    startEndEventListeners(newEndPoint);
  
    let maze = [
        ["#"," ","#"," "," "," ","#"," "],
        [" "," ","#"," "," ","#"," "," "],
        [" ","#","#"," ","#","#"," ","#"],
        [" ","#","#"," "," ","#"," ","#"],
        [" ","#","#","#"," ","#"," ","#"],
        [" "," ","#","#"," ","#"," "," "],
        ["#"," "," "," "," "," ","#"," "],
        [" "," ","#","#","#"," "," "," "],
    ]
    
    for (let row = 0; row < maze.length; row++) {
        for (let column = 0; column < maze[row].length; column++) {
            if ((maze[row][column]) === "#") {
                let nodeWall = document.getElementById(`Node-${row}-${column}`)
                nodeWall.classList.remove("empty")
                nodeWall.classList.add("filled")
                nodeWall.classList.add("wall")
            }
            let node = document.getElementById(`Node-${row}-${column}`)
            createNodeDragEvent(node)
        }
    }

    let navbarItem = this.parentNode; // ?
    
}






export { generateAddWallFunctions, generateRemoveWallFunctions, clearMap, loadExampleMaze }