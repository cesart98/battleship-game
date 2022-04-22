export default class Gameboard {
    constructor(name) {
        this.gridSquares = (Array(100)).fill(
            { isHit: false, hasShip: false, shipName: null }
        );
        this.name = name;
    }

    receiveAttack(coordinate) {

        let gridSquare = this.gridSquares[coordinate];

        if(gridSquare.isHit == false) {
            gridSquares[coordinate].isHit = true;
        } if(gridSquare.hasShip == true) {
            let ship = this.gridSquares[coordinate].shipName
            ship.receiveAttack(coordinate);
        }
    }

    placeShipAt(ship, grids) {
        grids.forEach(grid => {
            let currentGridSquare = this.gridSquares[ grid - 1 ]
            let currentShipName = { shipName: ship.name };
            let hasShipProperty = { hasShip: true };

            this.gridSquares[ grid - 1 ] = Object.assign(
                {}, currentGridSquare, currentShipName, hasShipProperty 
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

        let gridSquaresWithShips = this.gridSquares.filter(gridSquare => {
            gridSquare.hasShip == true;
        })

        gridSquaresWithShips.every(gridSquare => {
            gridSquare.isHit == true;
        })
        
    }
    
}