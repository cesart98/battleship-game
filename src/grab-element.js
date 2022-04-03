export default function addDragDropBehavior(mousedownEvent, elem) {
    let elemCurrentlyInside = null;
    function handleDroppable(event) {
        elem.hidden = true;
        let elemBelow = element.below(event);
        elem.hidden = false;

        console.log(1);
        console.log(elemCurrentlyInside);

        console.log(2);
        console.log(elemBelow);

        if (!elemBelow) return;

        let droppableBelow = element.droppableBelow(elemBelow);
        console.log(3);
        console.log(droppableBelow)

        if (elemCurrentlyInside != droppableBelow) {
            if(elemCurrentlyInside) {
                //leaveDroppable(elemCurrentlyInside);
                elemCurrentlyInside.classList.replace('filled-grid', 'empty-grid');
            }
            elemCurrentlyInside = droppableBelow;
            if (elemCurrentlyInside) {
                //enterDroppable(elemCurrentlyInside)
                elemCurrentlyInside.classList.replace('empty-grid', 'filled-grid');
            }
        }
    }
    const element = (() => {
        const currentlyInside = null;
        const droppableBelow = (elemBelow) => elemBelow.closest('.droppable');
        const below = (clientX, clientY) => {
            elem.hidden = true;
            let elemBelow = document.elementFromPoint(clientX, clientY);
            elem.hidden = false;
            return elemBelow;
        }
        return {currentlyInside, droppableBelow, below}
    })();
    const mouse = (() => {
        function moveElem(pageX, pageY) {
            elem.style.left = pageX - elem.offsetWidth / 2 + 'px';
            elem.style.top = pageY - elem.offsetHeight / 2 + 'px';
        }
        const grabElem = (event) => {
            console.log(event);
            elem.style.position = 'absolute';
            elem.style.zIndex = 1000;
    
            document.body.append(elem);
    
            moveElem(event.pageX, event.pageY);
            handleDroppable(event);
        }
        const dragElem = (event) => {
            console.log(event);
            elem.ondragstart = () => false;
            moveElem(event.pageX, event.pageY);
            handleDroppable(event);
        }
        const dropElem = (event) => {
            document.onmousemove = null;
            elem.onmouseup = null;
        }
        return {grabElem, dragElem, dropElem}
    })();

    // (1) append elem under the mouse
    mouse.grabElem(mousedownEvent);

    // (2) drag along elem under the mouse
    document.onmousemove = (mousemoveEvent) => {
        mouse.dragElem(mousemoveEvent);
    }
    
    // (3) drop elem on mouseup
    elem.onmouseup = (mouseupEvent) => {
        mouse.dropElem(mouseupEvent)
    }
}
