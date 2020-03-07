import { eventStates } from "../main.js";
import { setStartEndPointsMovingEvents } from "./intuitiveGrabbing.js";


function mouseDownRemoveWallEvent() {
    if(this.classList.contains("wall") || this.classList.contains("empty")){
        eventStates.removingWalls = true;
    }
    else if (document.getElementById("startPoint") === this.childNodes[0] ||
             document.getElementById("endPoint") === this.childNodes[0]) {
                setStartEndPointsMovingEvents()
    }
}

function mouseMoveRemoveWallEvent() {
    if (eventStates.removingWalls && this.classList.contains("wall")) {
        this.classList.remove("wall")
        this.classList.remove("filled")
        this.classList.add("empty")
    }
}

function mouseUpRemoveWallEvent() {
    eventStates.removingWalls = false;
    
}

function clickRemoveWallEvent() {
    if (this.classList.contains("wall")) {
        this.classList.remove("wall")
        this.classList.remove("filled")
        this.classList.add("empty")
    }
}




export { mouseDownRemoveWallEvent, mouseMoveRemoveWallEvent, mouseUpRemoveWallEvent, clickRemoveWallEvent } 