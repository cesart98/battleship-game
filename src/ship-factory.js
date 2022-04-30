export default class Ship {
    constructor(name, length) {
        this.shipParts = (Array(length)).fill(
            { isHit: false, location: null }
        );
        this.name = name;
    }

    receiveAttack(grid) {
        this.shipParts.forEach((shipPart, index) => {
            if(shipPart.location === grid) {
                this.shipParts[index].isHit = true;
            }
        })
    }

    setLocation(grids) {
        let reformattedArray = this.shipParts.map((currentObj, index) => {
            let currentLocation = { location: grids[index] };
            return Object.assign( {}, currentObj, currentLocation );
        });

        this.shipParts = reformattedArray;
    }

    isSunk() {
        this.shipParts.every(shipPart => {
            shipPart.isHit == true;
        })
    }
}