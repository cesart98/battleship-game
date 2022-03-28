export default async function generateWebpage() {
    async function generateGameBoard() {
        let gameboard = document.querySelector('.gameboard');
        function generateGridSquares() {
            for(let i = 1; i < 101; i++) {
                let gridSquare = document.createElement('div');
                gridSquare.setAttribute('id', i);
                gridSquare.setAttribute('class', 'not-hit');
                gameboard.appendChild(gridSquare);
            }
            return;
        }
        generateGridSquares();
        return;
    }
    async function generatePlayerShips() {
        let container = document.querySelector('.container');
        function dragAndDropShip(event, ship) {

            ship.ondragstart = () => false;

            let shiftX = event.clientX - ship.getBoundingClientRect().left;
            let shiftY = event.clientY - ship.getBoundingClientRect().top;

            // centers the ship at (pageX, pageY) coordinates
            function repositionShipAt(pageX, pageY) {
                ship.style.left = pageX - shiftX + 'px';
                ship.style.top = pageY - shiftY + 'px';
            }
            function onMouseDown() {
                // make ship absolute and on top by z-index
                ship.style.position = 'absolute';
                ship.style.zIndex = 1000;

                // move it out of any current parents directly into body
                // to make it positioned relative to the body
                document.body.append(ship);

                // move absolutely positioned ship under the pointer
                repositionShipAt(event.pageX, event.pageY);
            }
            function onMouseMove(event) {
                function checkForDroppable() {
                    ship.hidden = true;
                    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                    ship.hidden = false;

                    if (!elemBelow) return;

                    let droppableBelow = elemBelow.closest('.droppable');

                    if (currentDroppable != droppableBelow) {
                        if(currentDroppable) { // already above a droppable
                            // fly out of droppable
                            leaveDroppable(currentDroppable);
                        }
                        currentDroppable = droppableBelow;
                        if (currentDroppable) {
                            // fly into droppable
                            enterDroppable(currentDroppable);
                        }
                    }
                }
                repositionShipAt(event.pageX, event.pageY);
                checkForDroppable();
            };

            // (1) prepare ship on mousedown
            onMouseDown();
            
            // (2) move the ship on mousemove
            let currentDroppable = null;
            document.addEventListener('mousemove', onMouseMove);
            
            // (3) drop the ship on mouseup, remove unneeded handlers
            ship.onmouseup = () => {
                document.removeEventListener('mousemove', onMouseMove);
                ship.onmouseup = null;
            };
        }
        function generateTugBoat() {
            let tugBoat = document.createElement('div');
            tugBoat.setAttribute('class', 'tugboat');
            tugBoat.onmousedown = (event) => dragAndDropShip(event, tugBoat);
            container.appendChild(tugBoat);
        }
        generateTugBoat();
        return;
    }

    await generateGameBoard();
    await generatePlayerShips();

    return;
}