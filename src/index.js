import generateWebpage from './generate-webpage.js';
import Player from './player-factory.js'
import './style.css'

async function main() {
    await generateWebpage();

    let cesar = new Player('Cesar');
    let audrey = new Player('Audrey')
    
    cesar.gameboard.setShipLocations();

    cesar.attackGameboard(cesar.gameboard, 4)

    console.log(cesar);
    console.log(audrey);

    return;
}
main();
// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid