// Breath First Search Algorithm

import { eventStates } from "../main.js";
import { canTraverse, endPointFound } from "./generalAlgorithmFunctions.js";
import { visitedNodesAnimation } from "../animations/visitedNodesAnimation.js";


// Contains all the BFS Functionallity and Logics
function bfsAlgorithm() {
    //Set Starting Point 
    let startPointNode = setBFSAlgorithm(eventStates)
    runBFSAlgorithm(startPointNode, eventStates)
    if (eventStates.pathFound) {
        buildPath(eventStates)
    }
    visitedNodesAnimation(eventStates, "BFS")
}



// BFS Algorithm's Logics
function runBFSAlgorithm(startPoint, eventStates) {
    eventStates.bfs.breathVisitedNodes.push(startPoint)
    startPoint.classList += " visited"
    eventStates.bfs.levels = {startPoint: 0}
    eventStates.bfs.parents = {startPoint: null}
    eventStates.bfs.levelIndicator = 1
    eventStates.bfs.frontier = [startPoint]
    eventStates.pathFound = false
    let nodesToIterate = [startPoint]
    // This While Loop Runs the Algorithm Logic
    while (eventStates.bfs.frontier.length > 0) {
        // Next is kind of a "local queue" that resets every while loop iteration once it has been completed
        let next = []
        // This For Loop Checks for current Frontier's existing Adjacent Nodes
        nodesToIterate = iterateBFS(eventStates, next, nodesToIterate)
    }
    

}


function iterateBFS(eventStates, next, nodesToIterate) {

    for (let i = 0; i < nodesToIterate.length; i++) {
        if (endPointFound(nodesToIterate[i])) {
            eventStates.pathFound = true
            eventStates.bfs.endPoint = nodesToIterate[i]
        } else {
            let adjacentNodes = getAdjacentNodes(nodesToIterate[i])
            // This for loop Checks every Adjacent Node that has been found
            for (let j = 0; j < adjacentNodes.length; j++) {
                // If the current adjacent node hasn't been addded to the eventStates.bfs.levels object, work with it
                if (!eventStates.bfs.levels.hasOwnProperty(adjacentNodes[j].id)) {
                    // add to the Levels Object the current Adjacent Node with its current depth level
                    eventStates.bfs.levels[adjacentNodes[j].id] = eventStates.bfs.levelIndicator
                    // add to the Parents Object the current Adjacent Node with its current Parent
                    eventStates.bfs.parents[adjacentNodes[j].id] = nodesToIterate[i]
                    adjacentNodes[j].classList += " visited"
                    // add this current node to the Next Array to be looped upon inside the while loop (next iteration)
                    next.push(adjacentNodes[j])
                }
                
            }
        }    
    }
    if (eventStates.pathFound) {
        eventStates.bfs.frontier = []
    } else {
        eventStates.bfs.frontier = next
        eventStates.bfs.levelIndicator++
        eventStates.bfs.breathVisitedNodes.push(next)
    }

    return next
}

// ===================> This function would possibly get refactored to be used in most algorithms <=====================
// Sets the preliminary conditions to start DFS 
function setBFSAlgorithm(eventStates) {

    // const grid = document.getElementById("grid").childNodes
    const startPoint = document.getElementById("startPoint")
    const startPointNode = startPoint.parentElement
    eventStates.pathStack = []
    eventStates.visitedNodes = []
    eventStates.pathFound = false
    eventStates.algorithmRunning = true
    eventStates.queue = [] // This has been added (wasn't present in the first definition at dfsAlgorithm.js)
    eventStates.pathTree = {} // This has been added (wasn't present in the first definition at dfsAlgorithm.js) //Not sure if necessary
 
    return startPointNode
}

// As we only have information about the parents and the endpoint, we need to build a path from the beginning to the end 
function buildPath(eventStates) {
    // Destructuring
    let { endPoint, parents, path } = eventStates.bfs
    let pathBuilt = false;
    let currentNode = endPoint
    // This loop will traverse backwards, that is
    // from the endpoint to the startpoint, and will build an array with it
    while (!pathBuilt) {
        if (currentNode.hasChildNodes() && currentNode.childNodes[0].id === "startPoint") {
            path.unshift(currentNode)
            pathBuilt = true
        } else {
            path.unshift(currentNode)
            currentNode = parents[currentNode.id]
        }

    }

}



function getAdjacentNodes(currentNode) {
    let adjacentNodes = []       
    let row = currentNode.getAttribute("row")
    let column = currentNode.getAttribute("column")
    let up = document.getElementById(`Node-${parseInt(row)-1}-${column}`)
    let right = document.getElementById(`Node-${row}-${parseInt(column)+1}`)
    let down = document.getElementById(`Node-${parseInt(row)+1}-${column}`)
    let left = document.getElementById(`Node-${row}-${parseInt(column)-1}`)
    if (canTraverse(up)) {
        adjacentNodes.push(up)
    }
    if (canTraverse(right)) {
        adjacentNodes.push(right)
    }
    if (canTraverse(down)) {
        adjacentNodes.push(down)
    }
    if (canTraverse(left)) {
        adjacentNodes.push(left)
    }

    return adjacentNodes
}

export { bfsAlgorithm }