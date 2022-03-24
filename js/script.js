const Ship = (shipLength) => {
    let shipHealth = [];
    shipHealth.length = shipLength;
    shipHealth.fill(`Good`);
    
    const hit = (value) => shipHealth[value] = `Hit`;
    const isSunk = () => {
        if(shipHealth.includes(`Good`)) {
            return false;
        } else {
            return true;
        }
    };
    return {shipHealth, hit, isSunk};
}
