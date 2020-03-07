// General Algorithm Function to be used by most Algorithms

// Checks whether the destination node can be traversed to
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



// Checks whether the end point node has been reached
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


export { canTraverse, endPointFound }