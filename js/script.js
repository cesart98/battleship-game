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
            return grid.classList[0] = 'hit';
            // else if ship tile is on coordinate, send hit function
        } else if(grid.classList.includes('not-hit')) {
            return missedAttacks.push(grid.id);
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

let carrier = ShipFactory(5);