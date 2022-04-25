export default class Gameboard extends HTMLElement {
    constructor(name) {
        super();

        this.gridSquares = (Array(100)).fill(
            { isHit: false, hasShip: false, shipName: null }
        );

        this.name = name;

        
    }

    connectedCallback() {
        // create shadow
        this.attachShadow({mode: 'open'});

        // set styles
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    height: clamp(500px, 500px, 500px);
                    width: clamp(500px, 500px, 500px);
                    display: grid;
                    grid-template-columns: repeat(10, 1fr);
                    grid-template-rows: repeat(10, 1fr);
                    background-color: white;
                }
            </style>
        `;

        // create grid-square element class
        customElements.define('grid-square', class extends HTMLElement {
            connectedCallback() {
                this.attachShadow({mode: 'open'});
                this.shadowRoot.innerHTML = `
                    <style>
                        :host { border: solid black 1px; }
                    </style>
                `;
            }
        })
        
        // add 100 grid squares
        this.gridSquares.forEach((gridSquare, index) => {
            this.shadowRoot.innerHTML += `
                <grid-square id = ${index}
                    is-hit = ${gridSquare.isHit} 
                    has-ship = ${gridSquare.hasShip} 
                    ship-name = ${gridSquare.shipName}>
                </grid-square>
            `;
        })
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