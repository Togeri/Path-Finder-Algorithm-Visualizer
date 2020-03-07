import { clearMap } from "./generateWallFunctions.js";

// Get File Action Selector and add their respective Functionality
function generateFileActionChoserEventListener(fileActionsSelector) {
    let fileChooserArray = Array
                         .from(fileActionsSelector.childNodes)
                         .filter(element => {
                            if (element.classList) {
                                if (element.classList.contains("dropdown-item")) {
                                    return element
                                }
                            }
    })
    fileChooserArray.forEach(element => {
        if (element.id === "dropdownUploadFile") {
            element.addEventListener("change", fileUploadEvent)
        }
        else if (element.id === "dropdownDownloadFile") {
            element.addEventListener("click", fileDownloadEvent)
        }
    });
    
}

// Uploading File Event
function fileUploadEvent() {
    let uploadedFile = document.getElementById("dropdownUploadFile").files
    if (uploadedFile.length > 1) {
        alert("Sorry, you can't upload more than one maze at a time.")
    } else if (uploadedFile.length === 1) {
        uploadedFile = uploadedFile[0]
        const reader = new FileReader()
        reader.readAsText(uploadedFile)
        reader.onload = function () {
            let mazeArrayUnformatted = reader.result.split(",")
            let mazeArray = formatMazeArray(mazeArrayUnformatted)
            clearMap()
            loadMaze(mazeArray)
        }
    }
}


// Downloading File Event
function fileDownloadEvent() {
    console.log("Download")
    // 1. We create a Blob object
    let grid = document.getElementById("grid").childNodes
    let downloadMazeFile = []
    // This can be refactored
    grid.forEach(row => {
        let mazeFileRow = []
        row.childNodes.forEach((node, index) => {
            if (node.classList.contains("wall")) {
                mazeFileRow.push("#")
            } else {
                mazeFileRow.push(" ")
            }
            if (index === ((row.childNodes.length) - 1)) {
                mazeFileRow.push("*")
                downloadMazeFile.push(mazeFileRow)
            }
        })
    })
    const blobObj = new Blob([downloadMazeFile], {type: "text/plain"})
    console.log(downloadMazeFile)
    downloadFile(blobObj, "maze.txt")
    console.log(blobObj)
    console.log(url)
    
}


// 2. We create a function that acccepts a Blob Object and a FileName
function downloadFile(blob, filename) {
    // 3. We create a URL for the Blob Object
    const url = window.URL.createObjectURL(blob)
    console.log("url")
    console.log(url)
    // 4. We create an Anchor Tag so we can download the object
    const anchorTag = document.createElement("a")
    // Before we simulate the "click" event, we need to add some properties to the "a" tag so it can be trated as a real anchor tag
    anchorTag.href = url
    anchorTag.download = filename

    // 5. We create a simulation for the "click" event
    anchorTag.click()

    // We remove the "download button" and the Blob object
    anchorTag.remove()
    document.addEventListener("focus", event => {window.URL.revokeObjectURL(blob)})
}

// Formatting Maze File to work with it
function formatMazeArray(mazeArrayUnformatted) {
        let currentMazeRow = []
        let mazeArray = []
        mazeArrayUnformatted.forEach(element => {
            if (element === " " || element === "#") {
                currentMazeRow.push(element)
            } else if (element === "\*") {
                mazeArray.push(currentMazeRow)
                currentMazeRow = []
            }
        });
        return mazeArray
}


function loadMaze(mazeArray) {
    for (let row = 0; row < mazeArray.length; row++) {
        for (let column = 0; column < mazeArray[row].length; column++) {
            if ((mazeArray[row][column]) === "#") {
                let nodeWall = document.getElementById(`Node-${row}-${column}`)
                nodeWall.classList.remove("empty")
                nodeWall.classList.add("filled")
                nodeWall.classList.add("wall")
            }
            let node = document.getElementById(`Node-${row}-${column}`)
            // createNodeDragEvent(node)
        }
    }
}





export { generateFileActionChoserEventListener }