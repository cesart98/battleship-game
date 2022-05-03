import generateWebpage from './generate-webpage.js';
import Player from './player-factory.js'
import './style.css'

async function main() {
    await generateWebpage();
    let cesar = new Player('Cesar');
    let audrey = new Player('Audrey')
    
    cesar.gameboard.setShipLocations();

    cesar.attackGameboard(cesar.gameboard, 3)
    cesar.attackGameboard(cesar.gameboard, 5)

    console.log(cesar);
    console.log(audrey);

    return;
}
main();

let button = document.querySelector('.ready-button');
button.addEventListener('click', fetchShipLocations)

function fetchShipLocations() {
    let shipLocations = {
            carrierOne: [],
            destroyerOne: [],
            cruiserOne: [],
            submarineOne: [],
            submarineTwo: [],
            patrolboatOne: [],
            patrolboatTwo: [],
    };
    let gameboard = document.querySelector('.gameboard');
    gameboard = Array.from(gameboard.childNodes).filter(
        childNode => childNode.tagName == 'DIV'
    )
    gameboard.forEach(child => {
        console.log(child)
        if(child.classList.contains('occupied')) {
            let shipName = child.firstChild.id;
            shipLocations[shipName].push(child.id)
        }
    return shipLocations;
    })
}
// let returnedArray = [
//     { carrierOne: [2, 3, 4, 5, 6] },
//     { destroyerOne: [12, 13, 14, 15] },
//     { cruiserOne: [22, 23, 24] },
//     { submarineOne: [32, 33] },
//     { submarineOne: [42, 43] },
//     { patrolboatOne: [52, 53] },
//     { patrolboatTwo: [62, 63] },
// ]
// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid