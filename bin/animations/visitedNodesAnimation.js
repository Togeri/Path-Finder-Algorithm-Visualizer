
import { eventStates } from "../main.js";


function visitedNodesAnimation(eventStates, type) {

    switch (type) {
        case "DFS":
            animateDFS(eventStates, 1) // 1 = Timer set to 1second for Animations
            break;
        case "BFS":
            animateBFS(eventStates, 1)
        default:
            break;
    }

    
}




// Animation for Deep First Search
function animateDFS(eventStates, timer) {
    eventStates.visitedNodes.forEach((element, index) => {  
        setTimeout(function() { 
            element.classList += " visitedColor1" 
            if (index === eventStates.visitedNodes.length - 1 && eventStates.pathFound) {
                buildPath(eventStates.pathStack, 1, eventStates.visitedNodes, eventStates.visitedNodesPainted)
            }
        }, timer * 100)
        timer++
    });
}

// Animation for Solution Path Function 
function buildPath(pathStack, timer, visitedNodes, visitedNodesPainted) {

    pathStack.forEach(element => {
        setTimeout(function() {element.classList += " pathNode"}, timer * 50)
        timer++
    });
}


function animateBFS(eventStates, timer) {
    eventStates.bfs.breathVisitedNodes.forEach((element, index) => {
        setTimeout(() => {
            element.forEach(subElement => {
                subElement.classList += " visitedColor1"
            });
            if (index === eventStates.bfs.breathVisitedNodes.length - 1 && eventStates.pathFound) {
                buildPath(eventStates.bfs.path, 1)
            }
        }, timer * 100);
        timer++
    });
}


export { visitedNodesAnimation }