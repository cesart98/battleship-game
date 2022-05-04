import generateWebpage from './generate-webpage.js';
import Player from './player-factory.js'
import './style.css'

async function main() {

    let cesar = new Player({name: 'Cesar'});

    console.log(cesar);

    return;
}

generateWebpage();

// when user presses ready...
let readyButton = document.querySelector('.ready-button');
readyButton.addEventListener('click', main)

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
// place ships on board
// when user presses ready
// assign grid values to ship grid