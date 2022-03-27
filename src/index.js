import generateWebpage from './generate-webpage.js';
import './style.css'

async function main() {
    /*
    async function everythingElse() {
        const ShipFactory = (shipLength) => {
            let tilesStatus = [];
            let tilesLocation = [];
            tilesStatus.length = shipLength;
            tilesLocation.length = shipLength;
            tilesStatus.fill('Good');
            tilesLocation.fill('');
            
            const hit = (value) => tilesStatus[value] = 'Hit';
            const getTilesStatus = () => {
                return tilesStatus;
            }
            const getTilesLocation = () => {
                return tilesLocation;
            }
            const setTilesLocation = (location) => {
                tilesLocation = location;
            }
            const isSunk = () => {
                if(tilesStatus.includes('Good')) {
                    return false;
                } else {
                    return true;
                }
            };
            return {hit, getTilesStatus, getTilesLocation, setTilesLocation, isSunk};
        }
        
        const Gameboard = (() => {
            let missedAttacks = [];
            const receiveAttack = (grid) => {
                // if coordinate was already hit, prompt for another attack
                if(grid.classList.includes('hit')) {
                    return;
                } else if(grid.classList.includes('ship') && grid.classList.includes('not-hit')) {
                    missedAttacks.push(grid.id);
                    grid.classList[0] = 'hit';
                    return;
                    // else if ship tile is on coordinate, send hit function
                } else if(grid.classList.includes('not-hit')) {
                    missedAttacks.push(grid.id);
                    return;
                    // else if ship tile NOT on coordinate, record missed shot
                };
            };
            const setShipCoordinates = (ship, coordinates) => {
                // set ship location tiles to coordinates
                ship.setTilesLocation(coordinates);
            };
            const getMissedAttacks = () => {
                return missedAttacks;
            };
            const areShipsSunk = () => {};
            return {receiveAttack, setShipCoordinates, getMissedAttacks, areShipsSunk};
        })();
        
        let carrier = await ShipFactory(5);
        console.log(carrier);
        return;
    } 
    */
    await generateWebpage();
    let tugboat = await document.querySelector('.tugboat');
    tugboat.addEventListener('mousedown', addDragandDrop);
    // await everythingElse(); 
    return;
}
main();

function addDragandDrop(event) {
    let tugboat = document.querySelector('.tugboat');
    tugboat.style.positon = 'absolute';
    tugboat.style.zIndex = 1000;

    document.body.append(tugboat);

    function moveAt(pageX, pageY) {
        tugboat.style.left = pageX - tugboat.offsetWidth / 2 + 'px';
        tugboat.style.top = pageY - tugboat.offsetHeight / 2 + 'px';
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

    document.addEventListener('mousemove', onMouseMove);

    tugboat.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        tugboat.onmouseup = null;
    };
}
// generate gameboard
// place ships on board
// when user presses ready
// assign grid values to ship grid