// This handle the events for Start Point and End Point

import { eventStates } from "../main.js"


// Functions
function dragStart() { 
    setTimeout(() => {
        this.className += " grabbedItem invisible"
        this.parentElement.classList.remove("filled");
        //this.className += " invisible"
    }, 0);
}

function dragOver(event) {
    event.preventDefault() 
    // this.classList.add("hovered")

}

function dragEnd() {
    let nodeClasses = this.classList;
    nodeClasses.remove("invisible");
}

function dragEnter(event) {
    event.preventDefault()
    this.classList.add("filled")
    this.classList.remove("empty")
        // console.log("adding class hovered at ")
    // console.log(this)

}

function dragLeave(event) {
    event.preventDefault()
    this.classList.remove("filled")
    this.classList.add("empty")
    // console.log("removing class hovered at ")
    // console.log(this)
    // this.classList.remove("hovered")

}

function dragDrop(event) {
    event.preventDefault();
    let grabbedItem = document.getElementsByClassName("grabbedItem")
    this.appendChild(grabbedItem[0]);
    grabbedItem[0].classList.remove("grabbedItem")
}

export { dragDrop, dragEnd, dragEnter, dragLeave, dragOver, dragStart }