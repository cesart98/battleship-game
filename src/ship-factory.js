export default class Ship {
    constructor(name, length) {
        this.shipParts = (Array(length)).fill(
            { isHit: false, location: 'none' }
        );
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

        let reformattedArray = this.shipParts.map((currentObj, index) => {
            let currentLocation = { location: grids[index] };
            return Object.assign( {}, currentObj, currentLocation );
        });

        this.shipParts = reformattedArray;

        /*
        this.shipParts = (Array.from(
            (this.shipParts), (element, index) => {
                Object.assign(element, { location: grids[index] });
            }
        ));
        
        this.shipParts.forEach((shipPart, index) => {
            Object.assign(shipPart, { location: grids[index] });
        })

        
        grids.forEach(function(grid, index) {
            this.shipParts[index].location = grid;
        }, this)
        
        this.shipParts[0] = grids[0];
        this.shipParts[1] = grids[1];
        this.shipParts[2] = grids[2];
        this.shipParts[3] = grids[3];
        this.shipParts[4] = grids[4];
        
        let gridsCopy = [...grids]
        for(let i = 0; i <= gridsCopy.length; i++) {
            Object.assign(this.shipParts, { location: gridsCopy[i]})
        }

        grids.forEach(function(grid, index)  {
            console.log(this);
            console.log(grid);
            console.log(index)
            let coordinate  = grid[index];

            this.shipParts[index].location = grid;
        }, this)
    
        
        console.log(this);
        this.shipParts.forEach((shipPart, index) => {
            console.log(shipPart)
            console.log(grids[index]);
            console.log(this);
            Object.assign(this.location, grids[index]);
        })
        */
    }

    isSunk() {
        this.shipParts.every(shipPart => {
            shipPart.isHit == true;
        })
    }
}