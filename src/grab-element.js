export default function addDragDropBehavior(mousedownEvent, elem) {
    const mouse = (() => {
        const moveElem = (pageX, pageY) => {
            elem.style.left = pageX - shiftX + 'px';
            elem.style.top = pageY - shiftY + 'px';
        }
        const grabElem = (event) => {
            elem.style.position = 'absolute';
            elem.style.zIndex = 1000;
            elem.style.width = originalContainer.scrollWidth / 10 + 'px';
            document.body.append(elem);

            mouse.moveElem(event.pageX, event.pageY);
        }
        const dropElem = () => {
            elem.style.position = 'static';
            elem.style.zIndex = 'auto';
            elem.style.width = 'auto;'
        }
        const rejoinElem = (event) => {
            shiftX = event.clientX - elemChildren[0].getBoundingClientRect().left;
            shiftY = event.clientY - elemChildren[0].getBoundingClientRect().top;
            mouse.grabElem(event);
            elemChildren.forEach(elemChild => {
                elemChild.parentNode.classList.remove('occupied');
                elemChild.parentNode.classList.add('empty');
                elem.appendChild(elemChild);
            });
        }
        return { moveElem, grabElem, dropElem, rejoinElem };
    })();
    const elementsBelow = (() => {
        let currentElementsBelow = [];
        let previousElementsBelow = null;

        function addClassNames(elementsArray, className) {
            elementsArray.forEach(element => {
                element.classList.add(className);
            })
        }
        function removeClassNames(elementsArray, className) {
            elementsArray.forEach(element => {
                element.classList.remove(className);
            })
        }
        const set = () => {
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
                let shipPartX = shipPart.getBoundingClientRect().left + (shipPart.getBoundingClientRect().width * 0.5);
                let shipPartY = shipPart.getBoundingClientRect().top + (shipPart.getBoundingClientRect().height * 0.5);
                let elemBelow = getElemBelow(shipPartX, shipPartY);
                currentElementsBelow[index] = elemBelow;
            })
        }
        const areAll = (className) => {
            if(currentElementsBelow.some(element => !element.classList.contains(className))) {
                return false;
            } else  { return true; }
        }
        const handleHoverEffect = () => {
            if(currentElementsBelow != previousElementsBelow) {
                if(previousElementsBelow) {
                    removeClassNames(previousElementsBelow, 'hover');
                }
                previousElementsBelow = Array.from(currentElementsBelow);
                addClassNames(previousElementsBelow, 'hover');
            }
        }
        const receiveElement = () => {
            removeClassNames(currentElementsBelow, 'hover');
            removeClassNames(currentElementsBelow, 'empty');
            currentElementsBelow.forEach((elementBelow, index) => {
                elementBelow.appendChild(elemChildren[index]);
            })
            addClassNames(currentElementsBelow, 'occupied');
        }
        return {set, areAll, handleHoverEffect, receiveElement}
    })();

    let originalContainer = document.querySelector('.ship-container');
    let elemChildren = Array.from(elem.children);
    let shiftX = mousedownEvent.clientX - elem.getBoundingClientRect().left;
    let shiftY = mousedownEvent.clientY - elem.getBoundingClientRect().top;
    elem.ondragstart = () => false;

    // (1) append elem under the mouse
    mouse.grabElem(mousedownEvent);

    elementsBelow.set();
    if(elementsBelow.areAll('droppable')) {
        elementsBelow.handleHoverEffect();
    }

    // (2) move elem as mouse moves
    document.onmousemove = (mousemoveEvent) => {
        mouse.moveElem(mousemoveEvent.pageX, mousemoveEvent.pageY);

        elementsBelow.set();
        if(elementsBelow.areAll('droppable')) {
            elementsBelow.handleHoverEffect();
        }
    }
    
    // (3) drop elem on mouseup,
    elem.onmouseup = () => {
        document.onmousemove = null;
        mouse.onmouseup = null;

        if(elementsBelow.areAll('empty')) {
            mouse.dropElem();
            elementsBelow.receiveElement();

            // add event listener for next event
            elemChildren.forEach(elemChild => {
                elemChild.addEventListener('mousedown', event => {
                    mouse.rejoinElem(event);
                    addDragDropBehavior(event, elem);
                });
            })
        }

        
    }
}