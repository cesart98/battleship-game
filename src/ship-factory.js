export const ShipFactory = (shipLength) => {
    let tilesStatus = [];
    let tilesLocation = [];
    tilesStatus.length = shipLength;
    tilesLocation.length = shipLength;
    tilesStatus.fill('Good');
    tilesLocation.fill('');
    
    const hit = (value) => tilesStatus[value] = 'Hit';
    const getTilesStatus = () => {
        return tilesStatus;
    }
    const getTilesLocation = () => {
        return tilesLocation;
    }
    const setTilesLocation = (location) => {
        tilesLocation = location;
    }
    const isSunk = () => {
        if(tilesStatus.includes('Good')) {
            return false;
        } else {
            return true;
        }
    };
    return {hit, getTilesStatus, getTilesLocation, setTilesLocation, isSunk};
};