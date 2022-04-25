import addDragDropBehavior from './grab-element'

export default async function generateWebpage() {
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
    let container = document.querySelector('.container');
    await generatePlayerShips();

    return;
}