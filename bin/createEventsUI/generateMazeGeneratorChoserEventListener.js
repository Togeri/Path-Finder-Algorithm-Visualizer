import { loadExampleMaze, clearMap } from "./generateWallFunctions.js";



// Get File Action Selector and add their respective Functionality
function generateMazeGeneratorChoserEventListener(generateMazeSelector) {
    let generatorActionsArray = Array
                         .from(generateMazeSelector.childNodes)
                         .filter(element => {
                            if (element.classList) {
                                if (element.classList.contains("dropdown-item")) {
                                    return element
                                }
                            }
    })
    generatorActionsArray.forEach(element => {
        if (element.id === "dropdownRandomGenerator") {
            element.addEventListener("click", generateRandomMaze)
        }
        else if (element.id === "dropdownExampleMaze") {
            element.addEventListener("click", loadExampleMaze)
        }
    });
    
}



function generateRandomMaze() {
    clearMap()
    let grid = document.getElementById("grid").childNodes
    console.log(grid)
    // This can be refactored
    grid.forEach(row => {
        row.childNodes.forEach((node, index) => {
            if (!isCriticalPoint(node) && (Math.random() >= 0.5)) {
                setWall(node)
            }
        })
    })
}

function setWall(nodeWall) {
    nodeWall.classList.remove("empty")
    nodeWall.classList.add("filled")
    nodeWall.classList.add("wall")
}


function isCriticalPoint(node) {
    if (node.childNodes.length > 0) {
        return true
    }
    return false
}


export { generateMazeGeneratorChoserEventListener }







