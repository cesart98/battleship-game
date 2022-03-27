export default async function generateWebpage() {
    async function generateGameBoard() {
        let gameboard = await document.querySelector('.gameboard');
        async function generateGridSquares() {
            for(let i = 1; i < 101; i++) {
                let gridSquare = await document.createElement('div');
                await gridSquare.setAttribute('id', i);
                await gridSquare.setAttribute('class', 'not-hit');
                await gameboard.appendChild(gridSquare);
            }
            return;
        }
        await generateGridSquares();

        return;
    }
    async function generatePlayerShips() {
        let container = await document.querySelector('.container');
        let tugBoat = await document.createElement('div');
        await tugBoat.setAttribute('class', 'tugboat');
        await container.appendChild(tugBoat);
        return;
    }

    await generateGameBoard();
    await generatePlayerShips();

    return;
}