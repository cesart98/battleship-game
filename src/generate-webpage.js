import addDragDropBehavior from './grab-element'

export default async function generateWebpage() {
    async function generateGameBoard() {
        let gameboard = document.querySelector('.gameboard');
        function generateGridSquares() {
            for(let i = 1; i < 101; i++) {
                let gridSquare = document.createElement('div');
                gridSquare.setAttribute('id', i);
                gridSquare.classList.add('droppable');
                gridSquare.classList.add('empty');
                gameboard.appendChild(gridSquare);
            }
            return;
        }
        generateGridSquares();
        return;
    }
    async function generatePlayerShips() {
        let playerShips = document.createElement('div');
        playerShips.setAttribute('class', 'player-ships');
        container.appendChild(playerShips);
        
        function generateShip(type, length) {
            let ship = document.createElement('div');
            ship.setAttribute('class', type);
            ship.onmousedown = (event) => addDragDropBehavior(event, ship);
            for(let i = 0; i < length; i++) {
                let shipTile = document.createElement('span');
                ship.appendChild(shipTile)
            }
            playerShips.appendChild(ship);
        }
        
        generateShip('tugboat', 1);
        generateShip('carrier', 5);
        return;
    }
    let container = document.querySelector('.container');
    await generateGameBoard();
    await generatePlayerShips();

    return;
}