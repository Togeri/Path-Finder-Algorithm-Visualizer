//These two functions can we refactored
function createStartPoint(row, col) {
    //We create the element Start Point
    const startPointElement = document.createElement("i");
    startPointElement.setAttribute("id", "startPoint");
    startPointElement.setAttribute("draggable", true);
    startPointElement.setAttribute("class", "material-icons");
    startPointElement.innerHTML = "radio_button_checked";
    //We get the Node in which we want to append the Start Point
    const startPointNode = document.getElementById(`Node-${row}-${col}`);
    startPointNode.appendChild(startPointElement);
    startPointNode.classList.add("filled");
    startPointNode.classList.remove("empty");

    return startPointElement
}

// Can be refactored
function createEndPoint(row, col) {
    //We create the element End Point
    const endPointElement = document.createElement("i");
    endPointElement.setAttribute("id", "endPoint");
    endPointElement.setAttribute("draggable", true);
    endPointElement.setAttribute("class", "material-icons");
    endPointElement.innerHTML = "star_border";
    //We get the Node in which we want to append the End Point
    const endPointNode = document.getElementById("Node-0-7"); 
    endPointNode.appendChild(endPointElement);
    endPointNode.classList.add("filled")
    endPointNode.classList.remove("empty");

    return endPointElement
}

export { createStartPoint, createEndPoint }