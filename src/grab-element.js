export default function addDragDropBehavior(mousedownEvent, elem) {
    const element = (() => {

        let elementBelow = null;
        let droppableBelow = null;

        function getDroppableBelow(event) {
            function getElementBelow(clientX, clientY) {
                elem.hidden = true;
                let topmostElement = document.elementFromPoint(clientX, clientY);
                elem.hidden = false;
                return topmostElement;
            }
            elementBelow = getElementBelow(event.clientX, event.clientY)
            return elementBelow.closest('.droppable');
        }

        const isInsideDroppable = (event) => {
            console.log(event);
            droppableBelow = getDroppableBelow(event);
            console.log(droppableBelow);
            if(!droppableBelow) {
                return false;
            } else if(droppableBelow) {
                return true;
            }
        }
        const isAboveEmptyDroppable = (event) => {
            droppableBelow = getDroppableBelow(event);
            if(!droppableBelow) {
                return false;
            } else if(droppableBelow && droppableBelow.classList.contains('empty')) {
                return true;
            }
        }
        const leaveDroppable = () => {
            droppableBelow.classList.replace('occupied', 'empty');
        }
        const toggleHoverEffect = () => {
            /*if(!droppableBelow.style.backgroundColor) {
                droppableBelow.style.backgroundColor = 'green';
            }
            if(droppableBelow != getDroppableBelow(event)) {
                droppableBelow.style.backgroundColor = null;
            }*/
        }
        const enterDroppable = () => {
            droppableBelow.appendChild(elem);
            droppableBelow.classList.replace('empty', 'occupied');

            elem.style.position = 'static';
            elem.style.zIndex = 'auto';
        }
        return {leaveDroppable, enterDroppable, isInsideDroppable, toggleHoverEffect, isAboveEmptyDroppable}
    })();
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
            document.onmousemove = null;
            elem.onmouseup = null;
        }
        return {grabElem, dragElem, dropElem}
    })();

    // (1) append elem under the mouse
    mouse.grabElem(mousedownEvent);

    if(element.isInsideDroppable(mousedownEvent)) {
        element.leaveDroppable();
    }

    // (2) move elem as mouse moves
    document.onmousemove = (mousemoveEvent) => {
        mouse.dragElem(mousemoveEvent);
        if(element.isAboveEmptyDroppable(mousemoveEvent)) {
            element.toggleHoverEffect();
        }
    }
    
    // (3) drop elem on mouseup
    elem.onmouseup = (mouseupEvent) => {
        mouse.dropElem(mouseupEvent);
        if(element.isAboveEmptyDroppable(mouseupEvent)) {
            element.enterDroppable();
        }
    }
}
