import generateWebpage from './generate-webpage.js';
import { ShipFactory } from './ship-factory.js';
import { Gameboard } from './gameboard.js'
import './style.css'

async function main() {
    console.log(1)
    await generateWebpage();
    console.log(2)
    return;
}
console.log(3)
main();
console.log(4)

// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid