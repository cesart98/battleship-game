export default class Player {
    constructor() {

    }

    attackGameboard(gameboard, grid) {
        gameboard.receiveAttack(grid);
    }
}