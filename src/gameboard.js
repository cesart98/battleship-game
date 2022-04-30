import Ship from "./ship-factory";

export default class Gameboard {
    constructor() {
        this.ships = {
            carrierOne: new Ship('carrierOne', 5),
            destroyerOne: new Ship('destroyerOne', 4),
            cruiserOne: new Ship('cruiserOne', 3),
            submarineOne: new Ship('submarineOne', 2),
            submarineTwo: new Ship('submarineTwo', 2),
            patrolboatOne: new Ship('patrolboatOne', 1),
            patrolboatTwo: new Ship('patrolboatTwo', 1),
        }
        this.gridSquares = (Array(100)).fill(
            { isHit: false, hasShip: false, assignedShip: null }
        );
    }
    setShipLocations() {
        let returnedArray = [
            { carrierOne: [2, 3, 4, 5, 6] },
            { destroyerOne: [12, 13, 14, 15] },
            { cruiserOne: [22, 23, 24] },
            { submarineOne: [32, 33] },
            { submarineOne: [42, 43] },
            { patrolboatOne: [52, 53] },
            { patrolboatTwo: [62, 63] },
        ]
        returnedArray.forEach((returnedObj => {
            Object.entries(returnedObj).forEach(([key, value]) => {
                let shipObj = this.ships[key];
                shipObj.setLocation(value);
                this.placeShipAt(shipObj, value)
            })
        }))
    }
    receiveAttack(grid) {

        let currentGridSquare = this.gridSquares[grid];

        if(!currentGridSquare.isHit) {
            this.gridSquares[grid] = Object.assign(
                {}, currentGridSquare, { isHit: true } 
            );
        }
        if(currentGridSquare.hasShip) {
            currentGridSquare.assignedShip.receiveAttack(grid);
        }
    }

    placeShipAt(ship, grids) {

        grids.forEach(grid => {
            let currentGridSquare = this.gridSquares[grid]

            this.gridSquares[grid] = Object.assign(
                {}, currentGridSquare, { assignedShip: ship }, { hasShip: true } 
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