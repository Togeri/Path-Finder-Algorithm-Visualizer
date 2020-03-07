import { dragOver, dragEnter, dragLeave, dragDrop } from "../handleEventsUI/handleCriticalPoints.js" 

function createNodeDragEvent(node) {
    node.addEventListener("dragover", dragOver);
    node.addEventListener("dragenter", dragEnter);
    node.addEventListener("dragleave", dragLeave);
    node.addEventListener("drop", dragDrop);
    // node.addEventListener("mousedown");
}


export { createNodeDragEvent }