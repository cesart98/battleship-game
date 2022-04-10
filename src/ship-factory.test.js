import {Carrier, Battleship, Destroyer, Submarine, PatrolBoat} from './ship-factory';

test('intialize new carrier object', () => {
    let carrier = new Carrier();
    expect(typeof(carrier)).toBe('object');
    expect(carrier.shipParts.length).toEqual(5);
    carrier.shipParts.every(shipPart => {
        expect(shipPart.isHit).toBeFalsy();
        expect(shipPart.location).toBeNull();
    })
    expect(carrier.isSunk()).toBeFalsy();
});

test('set location of ship', () => {
    let carrier = new Carrier();
    let grids = [21, 22, 23, 24, 25];
    carrier.setLocation(grids);
    carrier.shipParts.every((shipPart, index) => {
        expect(shipPart.location).toEqual(grids[index]);
    })
});
/*
test('intialize new carrier object', () => {
    let carrier = new Carrier();
    expect(typeof(carrier)).toBe('object');
});
*/