import grabElement from './grab-element'

export default async function generateWebpage() {
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
    await addDragDropBehavior();

    return;
}