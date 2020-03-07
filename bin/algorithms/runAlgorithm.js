import { eventStates } from "../main.js";
import { dfsAlgorithm } from "./dfsAlgorithm.js";
import { bfsAlgorithm } from "./bfsAlgorithm.js";



function runAlgorithm() {
    let algorithm = this.getAttribute("algorithm")
    switch (algorithm) {
        case "DFS":
            dfsAlgorithm()
            break;
        case "BFS":
            bfsAlgorithm()
            break;
    
        default:
            break;
    }
}


export { runAlgorithm } 