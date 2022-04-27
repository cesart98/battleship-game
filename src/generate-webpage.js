import grabNode from './grab-element'

export default async function generateWebpage() {
    async function generateGridSquares() {
        let gameboard = document.querySelector('.gameboard');

        for(let i = 0; i < 100; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.setAttribute('id', i);
            gridSquare.classList.add('droppable');
            gridSquare.classList.add('empty');
            gameboard.appendChild(gridSquare);
        }

        return;
    }
    async function addDragDropBehavior() {
        let shipContainer = document.querySelector('.ship-container');

        shipContainer.childNodes.forEach(node => {
            node.addEventListener('mousedown', (event) => {
                grabNode(event, node)
            })
        })

        return;
    }
    await generateGridSquares();
    await addDragDropBehavior();

    return;
}