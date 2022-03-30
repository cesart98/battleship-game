export default async function generateWebpage() {
    async function generateGameBoard() {
        let gameboard = document.querySelector('.gameboard');
        function generateGridSquares() {
            for(let i = 1; i < 101; i++) {
                let gridSquare = document.createElement('div');
                gridSquare.setAttribute('id', i);
                gridSquare.setAttribute('class', 'empty-grid');
                gameboard.appendChild(gridSquare);
            }
            return;
        }
        generateGridSquares();
        return;
    }
    async function generatePlayerShips() {
        let shipContainer = document.createElement('div');
        shipContainer.setAttribute('class', 'player-ships');
        container.appendChild(shipContainer);
        function grabShip(event, ship) {
            ship.ondragstart = () => false;
            let shiftX = event.clientX - ship.getBoundingClientRect().left;
            let shiftY = event.clientY - ship.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                ship.style.left = pageX - shiftX + 'px';
                ship.style.top = pageY - shiftY + 'px';
            }
            
            // make ship absolute and on top by z-index
            ship.style.position = 'absolute';
            ship.style.zIndex = 1000;

            // move ship into body
            document.body.append(ship);

            // move ship under the pointer
            moveAt(event.pageX, event.pageY);

            function moveShip(event) {
                function checkForDroppable() {
                    ship.hidden = true;
                    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
                    ship.hidden = false;
                    console.log(elemBelow);

                    if (!elemBelow) return;

                    let emptyGrid = elemBelow.closest('.empty-grid');
                    console.log(emptyGrid)

                    if (currentGrid != emptyGrid) {
                        if(currentGrid) {
                            function leaveGrid(grid) {
                                grid.style.backgroundColor = "white";
                            }
                            leaveGrid(currentGrid);
                        }
                        currentGrid = emptyGrid;
                        if (currentGrid) {
                            function enterGrid(grid) {
                                grid.style.backgroundColor = "red";
                            }
                            enterGrid(currentGrid);
                        }
                    }
                }
                moveAt(event.pageX, event.pageY);
                checkForDroppable();
            }

            // (2) move the ship on mousemove
            let currentGrid = null;
            document.addEventListener('mousemove', moveShip);
            
            // (3) drop the ship on mouseup, remove unneeded handlers
            ship.onmouseup = () => {
                document.removeEventListener('mousemove', moveShip);
                ship.onmouseup = null;
            };
        }
        function generateShip(type) {
            let ship = document.createElement('div');
            ship.setAttribute('class', type);
            ship.onmousedown = (event) => grabShip(event, ship);
            shipContainer.appendChild(ship);
        }
        generateShip('tugboat');
        generateShip('carrier');
        return;
    }
    let container = document.querySelector('.container');
    await generateGameBoard();
    await generatePlayerShips();

    return;
}