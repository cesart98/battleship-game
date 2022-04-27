import grabElement from './grab-element'

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
        let shipElements = Array.from(shipContainer.childNodes).filter(
            childNode => childNode.tagName == 'DIV'
        )
        shipElements.forEach(shipElement => {
            shipElement.addEventListener('mousedown', (event) => {
                grabElement(event, shipElement)
            })
        })

        return;
    }
    await generateGridSquares();
    await addDragDropBehavior();

    return;
}