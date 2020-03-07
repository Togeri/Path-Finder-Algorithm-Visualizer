// In order to make it more intuitive, if you are adding/removing walls but want to
// move the start/end points, instead of clicking "move start/end point",
// you should be able to accomplish so by just grabbing and moving those points

import { startEndEventListeners } from "../createEventsUI/startEndEventListeners.js";
import { createNodeDragEvent } from "../createEventsUI/createNodeDragEvents.js"
import { eventStates } from "../main.js";

function setStartEndPointsMovingEvents() {
    
    eventStates.removingWalls = false
    eventStates.generatingWalls = false

    let navbarContent = document.getElementById("navbarULContent").childNodes
    navbarContent.forEach(element => {
        if (element.tagName === "LI" && element.classList.contains("navbar-active")) {
            element.classList.remove("navbar-active")
        }
    });

    let grid = document.getElementById("grid").childNodes
    grid.forEach(row => {
        row.childNodes.forEach(node => {
            let cleanNode = node.cloneNode(true)
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
    

    // const nodesArray = document.getElementsByClassName("node");
    // for(const node of nodesArray)
    // {
    //     createNodeDragEvent(node)
    // }


}

export { setStartEndPointsMovingEvents }