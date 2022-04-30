export default class Player {
    constructor(name) {
        this.name = name;
        this.playerShips = {};
        this.enemyGameboard = {};
        this.playerGameboard = {};
    }

    setPlayerShips(shipsToAssign) {
        this.playerShips = shipsToAssign;
    }
    setEnemyGameboard(gameboardToAssign) {
        this.enemyGameboard = gameboardToAssign;
    }
    setPlayerGameboard(gameboardToAssign) {
        this.playerGameboard = gameboardToAssign;
    }

    attackGameboard(gameboard, grid) {
        gameboard.receiveAttack(grid);
    }
}