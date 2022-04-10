class Ship {
    constructor(length, name) {
        let shipParts = [];
        shipParts.length = length;
        shipParts.fill( { isHit: false, location: null } );

        this.shipParts = shipParts;
        this.name = name;
    }
    recieveAttack(grid) {
        this.shipParts.forEach((shipPart, index) => {
            if(shipPart.location === grid) {
                this.shipParts[index].isHit = true;
            }
        })
    }
    setLocation(grids) {
        grids.forEach((grid, index) => {
            this.shipParts[index].location = grid;
        })
    }
    isSunk() {
        this.shipParts.every(shipPart => {
            shipPart.isHit == true;
        })
    }
}
class Carrier extends Ship {
    constructor(name) {
        super(length = 5, name);
    }
}
class Battleship extends Ship {
    constructor(name) {
        super(length = 4, name);
    }
}
class Destroyer extends Ship {
    constructor(name) {
        super(length = 3, name);
    }
}
class Submarine extends Ship {
    constructor(name) {
        super(length = 2, name);
    }
}
class PatrolBoat extends Ship {
    constructor(name) {
        super(length = 1), name;
    }
}

export {Carrier, Battleship, Destroyer, Submarine, PatrolBoat}