import { generateGrid } from "./generategrid/generateGrid.js";
import { addNavFunctions } from "./createEventsUI/generateNavFunctions.js";

// This will let us pass information about the app state into event listeners functions
 export const eventStates = {
     generatingWalls: false,
     removingWalls: false,
     algorithmRunning: false,
     pathStack: [],
     visitedNodes: [],
     pathFound: false,
     
     bfs : {
         levels: {},
         parents: {},
         levelIndicator: 0,
         frontier: [],
         endPoint: null,
         breathVisitedNodes: [],
         path: []
     }
 }


generateGrid();
addNavFunctions();


