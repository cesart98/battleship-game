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
    const elementsBelow = (() => {
        let elemChildren = Array.from(elem.children);
        let currentElementsBelow = [];
        let previousElementsBelow;
        
        const setCurrentElementsBelow = () => {
            function getElemBelow(x, y) {
                elemChildren.forEach(elemChild => {
                    elemChild.hidden = true;
                });
    
                let elemBelowMouse = document.elementFromPoint(x, y);
                
                elemChildren.forEach(elemChild => {
                    elemChild.hidden = false;
                });
                return elemBelowMouse;
            }
            elemChildren.forEach((shipPart, index) => {
                let shipPartX = (shipPart.getBoundingClientRect().left + (shipPart.getBoundingClientRect().width * 0.5));
                let shipPartY = (shipPart.getBoundingClientRect().top + (shipPart.getBoundingClientRect().height * 0.5));
                let elemBelow = getElemBelow(shipPartX, shipPartY);
                currentElementsBelow[index] = elemBelow;
            })
        }
        const haveClassName = (className) => {
            setCurrentElementsBelow();
            if(currentElementsBelow.every(elementBelow => elementBelow.classList.contains(className))) {
                return true;
            }
        }
        const classifyAsEmpty = () => {
            currentElementsBelow.forEach(elementBelow => {
                elementBelow.classList.replace('occupied', 'empty');
            })
        }
        const classifyAsOccupied = () => {
            currentElementsBelow.forEach(elementBelow => {
                elementBelow.classList.replace('empty', 'occupied');
            })
        }
        const handleHoverEffect = () => {
            // if every element below is droppable...
            if(currentElementsBelow.every(elementBelow => elementBelow.classList.contains('droppable'))) {
                
                // add hover class name
                currentElementsBelow.forEach(elementBelow => {
                    elementBelow.classList.add('hover');
                })

                // set previous elements array if not set.
                if(!previousElementsBelow) {
                    previousElementsBelow = Array.from(currentElementsBelow);
                }

                // if any element does not equal the previous one...
                if(currentElementsBelow.some((elementBelow, index) => elementBelow != previousElementsBelow[index])) {
                    previousElementsBelow.forEach(elementBelow => {
                        // ...remove hover class for previous element if not in current elements
                        if(!currentElementsBelow.includes(elementBelow)) {
                            elementBelow.classList.remove('hover')
                        }
                    })
                    previousElementsBelow = Array.from(currentElementsBelow);
                }
            }
            // if any element below is not droppable...
            if(previousElementsBelow && currentElementsBelow.some(elementBelow => !elementBelow.classList.contains('droppable'))) {
                previousElementsBelow.forEach(elementBelow => {
                    elementBelow.classList.remove('hover');
                })
                previousElementsBelow = null;
            }
        }
        const receiveElement = () => {
            currentElementsBelow.forEach((elementBelow, index) => {
                elementBelow.appendChild(elemChildren[index]);
            })
            elemChildren.forEach(elemChild => { // add event listener to remove from board
                elemChild.addEventListener('mousedown', (event) => {
                    elemChildren.forEach(elemChild => elem.appendChild(elemChild));
                    mouse.grabElem(event);
                    elementsBelow.classifyAsEmpty();
                    addDragDropBehavior(event, elem);
                })
            })
        }
        return {setCurrentElementsBelow, haveClassName, classifyAsEmpty, classifyAsOccupied, handleHoverEffect, receiveElement}
    })();

    // (1) append elem under the mouse
    mouse.grabElem(mousedownEvent);

    if(elementsBelow.haveClassName('occupied')) {
        elementsBelow.classifyAsEmpty();
    }

    // (2) move elem as mouse moves
    document.onmousemove = (mousemoveEvent) => {
        mouse.dragElem(mousemoveEvent);

        elementsBelow.setCurrentElementsBelow();
        elementsBelow.handleHoverEffect();
    }
    
    // (3) drop elem on mouseup,
    elem.onmouseup = (mouseupEvent) => {
        document.onmousemove = null;
        mouse.onmouseup = null;

        if(elementsBelow.haveClassName('empty')) {
            mouse.dropElem(mouseupEvent);
            elementsBelow.receiveElement();
            elementsBelow.classifyAsOccupied();
        }
    }
}