import generateWebpage from './generate-webpage.js';
import { ShipFactory } from './ship-factory.js';
import { Gameboard } from './gameboard.js'
import './style.css'

async function main() {
    await generateWebpage();
    return;
}
main();

// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid