export default function addDragDropBehavior(mousedownEvent, elem) {
    const mouse = (() => {
        function moveElem(pageX, pageY) {
            elem.style.left = pageX - elem.offsetWidth / 2 + 'px';
            elem.style.top = pageY - elem.offsetHeight / 2 + 'px';
        }
        const grabElem = (event) => {
            elem.style.position = 'absolute';
            elem.style.zIndex = 1000;
            document.body.append(elem);
    
            moveElem(event.pageX, event.pageY);
        }
        const dragElem = (event) => {
            elem.ondragstart = () => false;
            
            moveElem(event.pageX, event.pageY);
        }
        const dropElem = () => {
            elem.style.position = 'static';
            elem.style.zIndex = 'auto';
        }
        return {grabElem, dragElem, dropElem}
    })();
    const droppablesBelow = (() => {
        let shipPartElements = Array.from(elem.children);
        let currentDroppablesUnderElement = Array(shipPartElements.length);
        let previousDroppablesUnderElement;
        let droppableUnderMouse;
        let middleIndex = (shipPartElements.length - 1) / 2;

        function setCurrentDroppablesUnderElement() {
            for(let i = 0; i <= middleIndex; i++) {
                if(i == 0) {
                    currentDroppablesUnderElement[middleIndex] = droppableUnderMouse;
                } else if(i == 1) {
                    currentDroppablesUnderElement[(middleIndex - i)] = droppableUnderMouse.previousSibling;
                    currentDroppablesUnderElement[(middleIndex + i)] = droppableUnderMouse.nextSibling;
                } else if(i == 2) {
                    currentDroppablesUnderElement[(middleIndex - i)] = droppableUnderMouse.previousSibling.previousSibling;
                    currentDroppablesUnderElement[(middleIndex + i)] = droppableUnderMouse.nextSibling.nextSibling;
                }
            }
        }
        function getElemBelowMouse(event) {
            shipPartElements.forEach(shipPartElement => {
                shipPartElement.hidden = true;
            });

            let elemBelowMouse = document.elementFromPoint(event.clientX, event.clientY);
            
            shipPartElements.forEach(shipPartElement => {
                shipPartElement.hidden = false;
            });

            return elemBelowMouse;
        }

        const areOccupied = (event) => {
            droppableUnderMouse = getElemBelowMouse(event).closest('.droppable');
            if(!droppableUnderMouse) {
                return false;
            } else if(droppableUnderMouse.classList.contains('occupied')) {
                setCurrentDroppablesUnderElement();
                return true;
            }
            
        }
        const areEmpty = (event) => {
            droppableUnderMouse = getElemBelowMouse(event).closest('.droppable');
            if(!droppableUnderMouse) {
                return false;
            } else if(droppableUnderMouse.classList.contains('empty')) {
                setCurrentDroppablesUnderElement();
                return true;
            }
        }
        const classifyAsEmpty = () => {
            currentDroppablesUnderElement.forEach(droppable => {
                droppable.classList.replace('occupied', 'empty');
            })
        }
        const classifyAsOccupied = () => {
            currentDroppablesUnderElement.forEach(droppable => {
                droppable.classList.replace('empty', 'occupied');
            })
        }
        const toggleHoverEffect = () => {
            // when element first hovers over droppables
            if(!droppableUnderMouse.classList.contains('hover') && !previousDroppablesUnderElement) {
                currentDroppablesUnderElement.forEach(droppable => {
                    droppable.classList.add('hover');
                })
                previousDroppablesUnderElement = Array.from(currentDroppablesUnderElement);
                return;
            }
            // when element hovers into another droppable
            if(droppableUnderMouse != previousDroppablesUnderElement[middleIndex]) {
                previousDroppablesUnderElement.forEach(droppable => {
                    droppable.classList.remove('hover');
                })
                currentDroppablesUnderElement.forEach(droppable => {
                    droppable.classList.add('hover');
                })
                previousDroppablesUnderElement = Array.from(currentDroppablesUnderElement);
                return;
            }
        }
        const recieveElement = () => {
            currentDroppablesUnderElement.forEach((droppable, index) => {
                droppable.appendChild(shipPartElements[index]);
            })
        }
        return {areOccupied, areEmpty, classifyAsEmpty, classifyAsOccupied, toggleHoverEffect, recieveElement}
    })();

    // (1) append elem under the mouse
    mouse.grabElem(mousedownEvent);

    if(droppablesBelow.areOccupied(mousedownEvent)) {
        droppablesBelow.classifyAsEmpty();
    }
    // (2) move elem as mouse moves
    document.onmousemove = (mousemoveEvent) => {
        mouse.dragElem(mousemoveEvent);

        if(droppablesBelow.areEmpty(mousemoveEvent)) {
            droppablesBelow.toggleHoverEffect();
        }
    }
    
    // (3) drop elem on mouseup,
    elem.onmouseup = (mouseupEvent) => {
        document.onmousemove = null;
        mouse.onmouseup = null;

        mouse.dropElem(mouseupEvent);

        if(droppablesBelow.areEmpty(mouseupEvent)) {
            droppablesBelow.recieveElement();
            droppablesBelow.classifyAsOccupied();
        }
    }
}