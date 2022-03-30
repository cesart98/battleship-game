export const Gameboard = (() => {
    let gameBoard = [];
    for(let i = 1; i <= 100; i++) {
        gameBoard[i] = {
            isHit: false, 
            hasShip: false, 
            shipName: null
        }
    }
    console.log(gameBoard);

    const receiveAttackAt = (coordinate) => {
        function checkIfHitAt(grid) {
            if(grid.isHit == true) {
                return;
            } else if(grid.isHit == false) {
                gameBoard[coordinate].isHit = true;
                checkForShipAt(coordinate);
                return;
            };
        }
        function checkForShipAt(grid) {
            if (grid.hasShip == false) {
                return;
            } else if(grid.hasShip == true) {
                return; // send hit function to correct ship
            }
        }
        return checkIfHitAt(gameBoard[coordinate]);
    }
    const placeShipAt = (ship, desiredGrids) => {
        desiredGrids.forEach(grid => {
            if (gameBoard[grid].hasShip == true) {
                return; // reprompt for new location
            } else if(gameBoard[grid].hasShip == false) {
                gameBoard[grid].hasShip = true;
            }
        })
        ship.setLocation(desiredGrids);
    }
    const getMissedAttacks = () => {
        let missedAttacks = [];
        gameBoard.forEach((grid, index) => {
            if (grid.isHit == true && grid.hasShip == false) {
                missedAttacks.push(index);
            }
        })
        return missedAttacks;
    }
    const areShipsSunk = () => {};
    return {receiveAttackAt, placeShipAt, getMissedAttacks, areShipsSunk};
})();