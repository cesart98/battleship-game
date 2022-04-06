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
        let previousDroppable;
        let droppable;
        function getDroppableBelow(event) {
            function getElementBelow(clientX, clientY) {
                elem.hidden = true;
                let topmostElement = document.elementFromPoint(clientX, clientY);
                elem.hidden = false;
                return topmostElement;
            }
            let elementBelow = getElementBelow(event.clientX, event.clientY);
            return elementBelow.closest('.droppable');
        }
        const isOccupied = (event) => {
            droppable = getDroppableBelow(event);
            if(!droppable) {
                return false;
            } else if(droppable.classList.contains('occupied')) {
                return true;
            }
            
        }
        const isEmpty = (event) => {
            droppable = getDroppableBelow(event);
            if(!droppable) {
                return false;
            } else if(droppable.classList.contains('empty')) {
                return true;
            }
        }
        const classifyAsEmpty = () => droppable.classList.replace('occupied', 'empty');
        const classifyAsOccupied = () => droppable.classList.replace('empty', 'occupied');
        const toggleHoverEffect = () => {
            if(droppable.classList.contains('hover') && previousDroppable == null) {
                droppable.classList.remove('hover');
                return;
            } else if(!droppable.classList.contains('hover') && previousDroppable == null) {
                droppable.classList.add('hover');
                previousDroppable = droppable;
                return;
            } else if(!droppable.classList.contains('hover') && previousDroppable.classList.contains('hover')) {
                previousDroppable.classList.remove('hover');
                droppable.classList.add('hover');
                previousDroppable = droppable;
            }
        }
        const recieveElement = () => droppable.appendChild(elem);
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