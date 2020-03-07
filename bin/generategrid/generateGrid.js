import { startEndEventListeners } from "../createEventsUI/startEndEventListeners.js";
// import { dragOver, dragEnter, dragLeave, dragDrop } from "./handleEventsgood.js" 
import {createStartPoint, createEndPoint } from "./createStartEndPoints.js"
import { createNodeDragEvent } from "../createEventsUI/createNodeDragEvents.js"

let generateGrid = () => {
    // Selects grid (wrapper container)
    const grid = document.getElementById("grid")
    // Create all the nodes
    // 30 Rows
    for (let row = 0; row <= 21; row++) { // There will be 30 rows (29) //21
        let nodeRow = document.createElement("div");
        nodeRow.setAttribute("id", `nodeRow-${row}`);
        nodeRow.setAttribute("class", "nodeRow");
        grid.appendChild(nodeRow);
        // Each Row contains 75 Columns
        for (let column = 0; column <= 54; column++) { // There will be 75 columns (74) //54
            let node = document.createElement("div");
            node.setAttribute("id", `Node-${row}-${column}`);
            node.setAttribute("class", "node");
            node.setAttribute("draggable", false);
            node.setAttribute("row", row);
            node.setAttribute("column", column);
            node.classList.add("empty")
            nodeRow.appendChild(node)
        }
    }


    // This 4 lines can be refactored
    const startPoint = createStartPoint(7,0) // This will be Node "Node-14-14 when shipped to production"
    const endPoint = createEndPoint(0,7) // This will be Node "Node-23-53" when shipped to production
    // Add All Event Listeners
    // This can also be refactored
    startEndEventListeners(startPoint);
    startEndEventListeners(endPoint);


    const emptyNodes = document.getElementsByClassName("node");
    for(const node of emptyNodes)
    {
        createNodeDragEvent(node)
    }
}   



export {generateGrid}