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
    const droppableBelow = (() => {
        let shipPartElements = Array.from(elem.children);
        let currentDroppableArray = Array(shipPartElements.length);
        let previousDroppableArray;
        let droppableUnderMouse;
        let middleIndex = (shipPartElements.length - 1) / 2;

        function setDroppableArray() {
            for(let i = 0; i <= middleIndex; i++) {
                if(i == 0) {
                    currentDroppableArray[middleIndex] = droppableUnderMouse;
                } else if(i == 1) {
                    currentDroppableArray[(middleIndex - i)] = droppableUnderMouse.previousSibling;
                    currentDroppableArray[(middleIndex + i)] = droppableUnderMouse.nextSibling;
                }   else if(i == 2) {
                    currentDroppableArray[(middleIndex - i)] = droppableUnderMouse.previousSibling.previousSibling;
                    currentDroppableArray[(middleIndex + i)] = droppableUnderMouse.nextSibling.nextSibling;
                }
            }
        }
        function getElemBelowMouse(event) {
            function getElemFromPoint(clientX, clientY) {
                shipPartElements.forEach(shipPartElement => {
                    shipPartElement.hidden = true;
                });

                let elemFromPoint = document.elementFromPoint(clientX, clientY);
                
                shipPartElements.forEach(shipPartElement => {
                    shipPartElement.hidden = false;
                });

                return elemFromPoint;
            }
            return getElemFromPoint(event.clientX, event.clientY);
        }

        const isOccupied = (event) => {
            droppableUnderMouse = getElemBelowMouse(event).closest('.droppable');
            if(!droppableUnderMouse) {
                return false;
            } else if(droppableUnderMouse.classList.contains('occupied')) {
                setDroppableArray();
                return true;
            }
            
        }
        const isEmpty = (event) => {
            droppableUnderMouse = getElemBelowMouse(event).closest('.droppable');
            if(!droppableUnderMouse) {
                return false;
            } else if(droppableUnderMouse.classList.contains('empty')) {
                setDroppableArray();
                return true;
            }
        }
        const classifyAsEmpty = () => {
            currentDroppableArray.forEach(droppableElement => {
                droppableElement.classList.replace('occupied', 'empty');
            })
        }
        const classifyAsOccupied = () => {
            currentDroppableArray.forEach(droppableElement => {
                droppableElement.classList.replace('empty', 'occupied');
            })
        }
        const toggleHoverEffect = () => {
            // when ship enters gameboard, highlight tiles beneath
            // when ship hovers over different tiles
                //highlight new tiles and unhighlight old
            console.log(currentDroppableArray);
            console.log(previousDroppableArray);
            currentDroppableArray.forEach(droppableElement => {
                droppableElement.classList.add('hover');
            })
            previousDroppableArray = Array.from(currentDroppableArray);
            console.log(droppableUnderMouse)
            console.log(currentDroppableArray[middleIndex])
            if(currentDroppableArray != previousDroppableArray) {
                return;
            } else if(currentDroppableArray == previousDroppableArray){
                previousDroppableArray.forEach(droppableElement => {
                    droppableElement.classList.remove('hover');
                })
            }
            // if(droppable.classList.contains('hover') && !previousDroppableArray) {
            //     currentDroppableArray.forEach(droppableElement => {
            //         droppableElement.classList.remove('hover');
            //     })
            //     return;
            // } else if(!droppable.classList.contains('hover') && !previousDroppableArray) {
            //     currentDroppableArray.forEach(droppableElement => {
            //         droppableElement.classList.add('hover');
            //     })
            //     previousDroppableArray = Array.from(currentDroppableArray);
            //     return;
            // } else if(!droppable.classList.contains('hover') && previousDroppableArray) {
            //     previousDroppableArray.forEach(droppableElement => {
            //         droppableElement.classList.remove('hover');
            //     })
            //     currentDroppableArray.forEach(droppableElement => {
            //         droppableElement.classList.add('hover');
            //     })
            //     previousDroppableArray = Array.from(currentDroppableArray);
            // }
        }
        const recieveElement = () => {
            currentDroppableArray.forEach((droppableElement, index) => {
                droppableElement.appendChild(shipPartElements[index]);
            })
        }
        return {isOccupied, isEmpty, classifyAsEmpty, classifyAsOccupied, toggleHoverEffect, recieveElement}
    })();

    // (1) append elem under the mouse
    mouse.grabElem(mousedownEvent);

    if(droppableBelow.isOccupied(mousedownEvent)) {
        droppableBelow.classifyAsEmpty();
    }
    // (2) move elem as mouse moves
    document.onmousemove = (mousemoveEvent) => {
        mouse.dragElem(mousemoveEvent);

        if(droppableBelow.isEmpty(mousemoveEvent)) {
            droppableBelow.toggleHoverEffect();
        }
    }
    
    // (3) drop elem on mouseup,
    elem.onmouseup = (mouseupEvent) => {
        document.onmousemove = null;
        mouse.onmouseup = null;

        mouse.dropElem(mouseupEvent);

        if(droppableBelow.isEmpty(mouseupEvent)) {
            droppableBelow.recieveElement();
            droppableBelow.classifyAsOccupied();
        }
    }
}