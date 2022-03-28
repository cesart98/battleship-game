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
        function generateTugBoat() {
            let tugBoat = document.createElement('div');
            tugBoat.setAttribute('class', 'tugboat');
            tugBoat.onmousedown = function (event) {

                let shiftX = event.clientX - tugBoat.getBoundingClientRect().left;
                let shiftY = event.clientY - tugBoat.getBoundingClientRect().top;

                // (1) prepare element for moving
                tugBoat.style.position = 'absolute';
                tugBoat.style.zIndex = 1000;

                // move it out of any current parents directly into body
                // to make it positioned relative to the body
                document.body.append(tugBoat);

                // move our absolutely positioned ship under the pointer
                moveAt(event.pageX, event.pageY);

                // centers the ship at (pageX, pageY) coordinates
                function moveAt(pageX, pageY) {
                    tugBoat.style.left = pageX - shiftX + 'px';
                    tugBoat.style.top = pageY - shiftY + 'px';
                }
            
                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                };
                
                // (2) move the ship on mousemove
                document.addEventListener('mousemove', onMouseMove);
                
                // (3) drop the ship, remove unneeded handlers
                tugBoat.onmouseup = function() {
                    document.removeEventListener('mousemove', onMouseMove);
                    tugBoat.onmouseup = null;
                };
            }
            tugBoat.ondragstart = () => false;
            container.appendChild(tugBoat);
        }
        generateTugBoat();
        return;
    }

    await generateGameBoard();
    await generatePlayerShips();

    return;
}