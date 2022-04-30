import Gameboard from './gameboard.js'

export default class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
    }
    attackGameboard(gameboard, grid) {
        gameboard.receiveAttack(grid);
    }
}