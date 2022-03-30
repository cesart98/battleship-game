export const ShipFactory = (length) => {
    let shipPart = [];
    for(let i = 0; i <= length; i++) {
        shipPart[i] = {
            isHit: false,
            location: null
        }
    }
    
    const recieveAttack = (grid) => {
        let index = shipPart.findIndex(part => part.location == grid);
        shipPart[index].isHit = true;
    }
    const setLocation = (grids) => {
        for(let i = 0; i <= grids.length; i++) {
            shipPart[i].location = grids[i];
        }
    }
    const isSunk = () => {
        shipPart.forEach(part => {
            if(part.isHit == false) {
                return false
            } else if(part.isHit == true) {
                return true
            }
        })
    };
    return {recieveAttack, setLocation, isSunk};
};