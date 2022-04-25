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
        
        function generateShip(type) {
            let ship = document.createElement('div');
            ship.setAttribute('class', type);
            ship.onmousedown = (event) => addDragDropBehavior(event, ship);
            playerShips.appendChild(ship);
        }
        
        generateShip('tugboat');
        generateShip('carrier');
        return;
    }
    let container = document.querySelector('.gameboard-container');
    await generateGameBoard();
    await generatePlayerShips();

    return;
}