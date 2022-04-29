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
        let currentDroppablesBelow = [];
        let previousDroppablesBelow;
        let droppableUnderMouse;
        let middleIndex = (shipPartElements.length - 1) / 2;
        
        function getElemBelow(x, y) {
            shipPartElements.forEach(shipPartElement => {
                shipPartElement.hidden = true;
            });

            let elemBelowMouse = document.elementFromPoint(x, y);
            
            shipPartElements.forEach(shipPartElement => {
                shipPartElement.hidden = false;
            });
            return elemBelowMouse;
        }
        function setCurrentDroppablesBelow() {
            shipPartElements.forEach((shipPart, index) => {
                let shipPartX = (shipPart.getBoundingClientRect().left + (shipPart.getBoundingClientRect().width * 0.5));
                let shipPartY = (shipPart.getBoundingClientRect().top + (shipPart.getBoundingClientRect().height * 0.5));
                let elemBelow = getElemBelow(shipPartX, shipPartY);
                currentDroppablesBelow[index] = elemBelow;
            })
        }
        const areOccupied = (event) => { // to-do: combine w/ areEmpty
            droppableUnderMouse = getElemBelow(event.clientX, event.clientY).closest('.droppable');
            if(!droppableUnderMouse) {
                return false;
            } else if(droppableUnderMouse.classList.contains('occupied')) {
                setCurrentDroppablesBelow();
                return true;
            }
            
        }
        const areEmpty = (event) => { // to-do: combine w/ areOccupied
            droppableUnderMouse = getElemBelow(event.clientX, event.clientY).closest('.droppable');

            console.log(event);
            console.log(droppableUnderMouse);
            console.log(droppableUnderMouse.getBoundingClientRect());

            if(!droppableUnderMouse) {
                return false;
            } else if(droppableUnderMouse.classList.contains('empty')) {
                setCurrentDroppablesBelow(event);
                return true;
            }
        }
        const classifyAsEmpty = () => {
            currentDroppablesBelow.forEach(droppable => {
                droppable.classList.replace('occupied', 'empty');
            })
        }
        const classifyAsOccupied = () => {
            currentDroppablesBelow.forEach(droppable => {
                droppable.classList.replace('empty', 'occupied');
            })
        }
        const toggleHoverEffect = () => {
            // when element first hovers over droppables
            if(!droppableUnderMouse.classList.contains('hover') && !previousDroppablesBelow) {
                currentDroppablesBelow.forEach(droppable => {
                    droppable.classList.add('hover');
                })
                previousDroppablesBelow = Array.from(currentDroppablesBelow);
                return;
            }
            // when element hovers over another droppable
            if(droppableUnderMouse != previousDroppablesBelow[middleIndex]) {
                previousDroppablesBelow.forEach(droppable => {
                    droppable.classList.remove('hover');
                })
                currentDroppablesBelow.forEach(droppable => {
                    droppable.classList.add('hover');
                })
                previousDroppablesBelow = Array.from(currentDroppablesBelow);
                return;
            }
        }
        const recieveElement = () => {
            currentDroppablesBelow.forEach((droppable, index) => {
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