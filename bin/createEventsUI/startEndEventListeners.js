// Import Handle Element Functions
import { dragStart, dragEnd } from "../handleEventsUI/handleCriticalPoints.js" 
import { eventStates } from "../main.js"

// This function adds event listeners generally
let startEndEventListeners = (node) => {
    //Listeners
    //DragStart
    node.addEventListener("dragstart", dragStart);
    //endPoint.addEventListener("dragstart", dragStart);
    
    //DragEnd
    node.addEventListener("dragend", dragEnd);
    //endPoint.addEventListener("dragend", dragEnd);
    
    node.addEventListener("click", function() {
        eventStates.generatingWalls = false
        eventStates.removingWalls = false
    })

}





export { startEndEventListeners }

