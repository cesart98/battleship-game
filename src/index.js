import generateWebpage from './generate-webpage.js';
import Ship from './ship-factory.js';
import Gameboard from './gameboard.js'
import './style.css'


async function main() {
    async function alertShip(alertthisship) {
        let theship = alertthisship;
        console.log(theship);
        return;
    }
    async function alertBoard(alertThis) {
        let theBoard = alertThis;
        console.log(theBoard);
        return;
    }
    let carrier = new Ship('carrierOne', 5);
    carrier.setLocation([21, 22, 23, 24, 25]);
    await alertShip(carrier);

    let gameboard = new Gameboard();
    gameboard.placeShipAt(carrier, [21, 22, 23, 24, 25]);
    gameboard.receiveAttack(24);
    await alertBoard(gameboard);
    generateWebpage();

    return;
}
main();
// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid