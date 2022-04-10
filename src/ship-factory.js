class Ship {
    constructor() {
        this.shipParts = [];
    }
    recieveAttack(grid) {
        let index = this.shipParts.findIndex(shipPart => {
            shipPart.location == grid
        });
        shipParts[index].isHit = true;
    }
    setLocation(...grids) {
        for(let i = 0; i <= grids.length; i++) {
            shipParts[i].location = grids[i];
        }
    }
    isSunk() {
        shipParts.every(shipPart => {
            shipPart.isHit == true;
        })
    }
}
class Carrier extends Ship {
    constructor() {
        super();
        for(let i = 0; i <= 4; i++) {
            this.shipParts[i] = {
                isHit: false,
                location: null
            }
        }
    }
}
class Battleship extends Ship {
    constructor() {
        super();
        for(let i = 0; i <= 3; i++) {
            this.shipParts[i] = {
                isHit: false,
                location: null
            }
        }
    }
}
class Destroyer extends Ship {
    constructor() {
        super();
        for(let i = 0; i <= 2; i++) {
            this.shipParts[i] = {
                isHit: false,
                location: null
            }
        }
    }
}
class Submarine extends Ship {
    constructor() {
        super();
        for(let i = 0; i <= 1; i++) {
            this.shipParts[i] = {
                isHit: false,
                location: null
            }
        }
    }
}
class PatrolBoat extends Ship {
    constructor() {
        super();
        for(let i = 0; i <= 0; i++) {
            this.shipParts[i] = {
                isHit: false,
                location: null
            }
        }
    }
}
module.exports = Carrier;
//export {Carrier, Battleship, Destroyer, Submarine, PatrolBoat}