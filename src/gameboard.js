export default class Gameboard extends HTMLElement {
    constructor(name) {
        super();

        this.gridSquares = (Array(100)).fill(
            { isHit: false, hasShip: false, shipName: null }
        );

        this.name = name;

        
    }

    render() {
        // create shadow
        // this.attachShadow({mode: 'open'});

        // define custom grid-square element
        customElements.define('grid-square', class extends HTMLElement {
            connectedCallback() {
                //this.attachShadow({mode: 'open'});
            }
        })
        
        // add 100 grid squares
        this.gridSquares.forEach((gridSquare, index) => {
            this.innerHTML += `
                <grid-square id = ${index}
                    is-hit = ${gridSquare.isHit} 
                    has-ship = ${gridSquare.hasShip} 
                    ship-name = ${gridSquare.shipName}>
                </grid-square>
            `;
        })
    }

    connectedCallback() {
        if(!this.rendered) {
            this.render();
            this.rendered = true;
        }
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