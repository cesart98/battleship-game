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
        this.gridSquares = [];
        this.setGridSquares();
        this.setShipLocations();
    }
    setGridSquares() {
        let gridSquaresFromDOM = document.querySelectorAll('.gameboard > div');

        gridSquaresFromDOM.forEach(gridSquareFromDOM => {
            if(gridSquareFromDOM.classList.contains('empty')) {
                this.gridSquares.push(
                    { isHit: false, hasShip: false, assignedShip: null }
                )
            } else if(gridSquareFromDOM.classList.contains('occupied')) {
                let shipToAssign = this.ships[gridSquareFromDOM.firstChild.id];
                this.gridSquares.push(
                    { isHit: false, hasShip: true, assignedShip: shipToAssign }
                )
            }
        })
        console.log(this.gridSquares)
    }
    setShipLocations() {
        Object.values(this.ships).forEach((currentShip) => {
            let gridSquaresIndices = [];
            this.gridSquares.forEach((gridSquare, index) => {
                if(gridSquare.assignedShip == currentShip) { 
                    gridSquaresIndices.push(index);
                }
            })
            currentShip.setLocation(gridSquaresIndices);
        })
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