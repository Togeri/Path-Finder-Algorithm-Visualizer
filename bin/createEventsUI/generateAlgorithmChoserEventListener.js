


// Get DropDown Algorithms and add their respective Algorithms
function generateAlgorithmChoserEventListener(algorithmsSelector) {
    let algorithmsArray = Array
                         .from(algorithmsSelector.childNodes)
                         .filter(element => {
                            if (element.classList) {
                                if (element.classList.contains("dropdown-item")) {
                                    return element
                                }
                            }
    })
    algorithmsArray.forEach(element => {
        element.addEventListener("click", algorithmChoser)
    });
    
}




function algorithmChoser() {
    
    let runButton = document.getElementById("runButton")
    // All the dropdown items have an id of "dropdown[Algorithm Name]. And dropdown is a string whose length is 8
    // dropdown.length === 8
    // Hence, we slice the id to ignore the "dropdown" part and stick only with the algorithm's name
    let chosenAlgorithm = this.id.slice(8)
    runButton.innerHTML = `Run ${chosenAlgorithm} Pathfinder!`
    runButton.setAttribute("algorithm", chosenAlgorithm)
}



export { generateAlgorithmChoserEventListener }