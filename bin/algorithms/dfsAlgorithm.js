// Deep First Search Algorithm

import { eventStates } from "../main.js";
import { visitedNodesAnimation } from "../animations/visitedNodesAnimation.js";

// Contains all the DFS Algorithm functionality and logics
function dfsAlgorithm() {
    const startingPointNode = setDFSAlgorithm(eventStates)
    // Set timer to 1s for Animation Frames (in seconds)
    runDFSAlgorithm(startingPointNode, eventStates, 1)
    visitedNodesAnimation(eventStates, "DFS")
    // paintVisitedNodes(eventStates, 1) //Timer set to 1second for Animations
}

// ===================> This function would possibly get refactored to be used in every single algorithm <=====================
// Sets the preliminary conditions to start DFS 
function setDFSAlgorithm(eventStates) {

    // const grid = document.getElementById("grid").childNodes
    const startPoint = document.getElementById("startPoint")
    const startPointNode = startPoint.parentElement
    eventStates.pathStack = []
    eventStates.visitedNodes = []
    eventStates.pathFound = false
    eventStates.algorithmRunning = true
 
    return startPointNode
}

// Runs the DFS Algorithm
function runDFSAlgorithm(currentNode, eventStates) {
    if (!eventStates.pathFound && eventStates.algorithmRunning) {
        // We add the Visited Class to the Current Node so it can't be visited again
        currentNode.classList += " visited"
        // We push the current node to the Visited Nodes Array in the Event States Object to store the information of the process
        eventStates.visitedNodes.push(currentNode)
        // We push the current node to the Path Stack Array in the Event States Object to store the information of the process
        eventStates.pathStack.push(currentNode)
        // Check if we found the Endpoint
        if (endPointFound(currentNode)) {
            eventStates.pathFound = true
        } else {
            // Check for other paths
            let row = currentNode.getAttribute("row")
            let column = currentNode.getAttribute("column")
            let up = document.getElementById(`Node-${parseInt(row)-1}-${column}`)
            let right = document.getElementById(`Node-${row}-${parseInt(column)+1}`)
            let down = document.getElementById(`Node-${parseInt(row)+1}-${column}`)
            let left = document.getElementById(`Node-${row}-${parseInt(column)-1}`)
            if (canTraverse(up)) {
                runDFSAlgorithm(up, eventStates)
            }
            if (canTraverse(right)) {
                runDFSAlgorithm(right, eventStates)
            }
            if (canTraverse(down)) {
                runDFSAlgorithm(down, eventStates)
            }
            if (canTraverse(left)) {
                runDFSAlgorithm(left, eventStates)
            }
            // If the End hasn't been found for this Path, pop out the  current node
            if (!eventStates.pathFound) {
                eventStates.pathStack.pop()
            }
        }
    }
    
}

// ===================> This function would possibly get refactored to be used in every single algorithm <=====================
// Check if we have reached to the end point
function endPointFound(node) {
    // Check whether the current node has the endPoint as a child node 
    // In other words: check if we have reached the endPoint
    if (node.hasChildNodes()) {
        if (node.childNodes[0].id === "endPoint") {
            return true
        }
    }
    // else, returns false
    return false
}

// ===================> This function would possibly get refactored to be used in every single algorithm <=====================
// Checks if we can traverse through the desired node 
function canTraverse(destinationNode) {
    if (destinationNode === null) {
        return false
    } else {
        if (!destinationNode.classList.contains("wall") &&
            !destinationNode.classList.contains("visited")) {
            return true
        }
        return false
    }
}


 export { dfsAlgorithm }