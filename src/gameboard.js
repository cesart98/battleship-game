import Ship from "./ship-factory";

export default class Gameboard {
    constructor() {
        this.ships = {
            carrierOne: new Ship({name: 'carrierOne', length: 5}),
            destroyerOne: new Ship({name: 'destroyerOne', length: 4}),
            cruiserOne: new Ship({name: 'cruiserOne', length: 3}),
            submarineOne: new Ship({name: 'submarineOne', length: 2}),
            submarineTwo: new Ship({name: 'submarineTwo', length: 2}),
            patrolboatOne: new Ship({name: 'patrolboatOne', length: 1}),
            patrolboatTwo: new Ship({name: 'patrolboatTwo', length: 1}),
        }
        this.gridSquares = (Array(100)).fill(
            { isHit: false, hasShip: false, assignedShip: null }
        )
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
                this.assignShipToGrids(shipObj, value)
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

    assignShipToGrids(ship, grids) {

        grids.forEach(grid => {
            let currentGridSquare = this.gridSquares[grid];

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