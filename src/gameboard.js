export default class Gameboard {
    constructor(name) {
        this.gridSquares = (Array(100)).fill(
            { isHit: false, hasShip: false, shipName: null }
        );
        this.name = name;
    }

    receiveAttack(grid) {

        let currentGridSquare = this.gridSquares[ grid ];

        if(currentGridSquare.isHit == false) {
            this.gridSquares[ grid ] = Object.assign(
                {}, currentGridSquare, { isHit: true } 
            );
        }
    }

    placeShipAt(ship, grids) {

        grids.forEach(grid => {
            let currentGridSquare = this.gridSquares[ grid ]
            let currentShipName = { shipName: ship.name };

            this.gridSquares[ grid ] = Object.assign(
                {}, currentGridSquare, currentShipName, { hasShip: true } 
            );
        })
    }

    getMissedAttacks() {

        let missedAttacks = [];

        this.gridSquares.forEach((gridSquare, index) => {
            if (gridSquare.isHit == true && gridSquare.hasShip == false) {
                missedAttacks.push(index);
            }
        })
        return missedAttacks;
    }

    areShipsSunk() {

        let gridSquaresWithShips = this.gridSquares.filter(
            gridSquare => gridSquare.hasShip == true
        );

        gridSquaresWithShips.every(gridSquare => {
            gridSquare.isHit == true;
        })
    }
}