export default class Player {
    constructor(name) {
        this.name = name;
    }

    attackGameboard(gameboard, grid) {
        gameboard.receiveAttack(grid);
    }
}