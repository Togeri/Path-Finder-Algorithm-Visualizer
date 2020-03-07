import { eventStates } from "../main.js";
import { setStartEndPointsMovingEvents } from "./intuitiveGrabbing.js";

function mouseDownWallEvent() {
    if(this.classList.contains("empty")) {
        eventStates.generatingWalls = true;
    }
    else if (document.getElementById("startPoint") === this.childNodes[0] ||
             document.getElementById("endPoint") === this.childNodes[0]) {
                setStartEndPointsMovingEvents()
    }

}

function mouseMoveWallEvent() {
    if (eventStates.generatingWalls && this.classList.contains("empty")) {
        this.classList.remove("empty")
        this.classList.add("filled")
        this.classList.add("wall")
    }
}

function mouseUpWallEvent() {
    eventStates.generatingWalls = false;
    
}

function clickAddWallEvent() {
    if (eventStates.generatingWalls && this.classList.contains("empty")) {
        this.classList.remove("empty")
        this.classList.add("filled")
        this.classList.add("wall")
    }
}



export { mouseDownWallEvent, mouseMoveWallEvent, mouseUpWallEvent, clickAddWallEvent } 

