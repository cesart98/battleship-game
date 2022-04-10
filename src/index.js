import generateWebpage from './generate-webpage.js';
import {Carrier, Battleship, Destroyer, Submarine, PatrolBoat} from './ship-factory.js';
import { Gameboard } from './gameboard.js'
import './style.css'

async function main() {
    await generateWebpage();
    return;
}
main();

let carrier = new Carrier();
let grids = [21, 22, 23, 24, 25];
carrier.setLocation(grids);
console.log(carrier);
// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid