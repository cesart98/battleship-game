import Ship from '../ship-factory';

describe('correctly intialize new carrier ship', () => {

    let carrier = new Ship('carrier', 5);

    test('carrier is object', () => {
        expect(typeof(carrier)).toBe('object');
    });

    test('shipParts array length is five', () => {
        expect(carrier.shipParts.length).toEqual(5);
    });

    test('shipParts have correct start values', () => {
        carrier.shipParts.every(shipPart => {
            expect(shipPart.isHit).toBeFalsy();
            expect(shipPart.location).toBeNull();
        });
    });

    test('carrier is not sunk', () => {
        expect(carrier.isSunk()).toBeFalsy();
        expect(carrier.isSunk()).not.toBeTruthy();
    });
});

describe('correctly execute ship functions', () => {

    let carrier = new Ship('carrier', 5);
    let shipLocation = [21, 22, 23, 24, 25];
    let gridCoordinate = 24;

    carrier.setLocation(shipLocation);

    test('each shipPart location equals each value in array', () => {
        carrier.shipParts.every((shipPart, index) => {
            expect(shipPart.location).toEqual(shipLocation[index]);
        });
    });

    carrier.recieveAttack(gridCoordinate);

    test('shipPart that recieved attack is marked as hit', () => {
        carrier.shipParts.forEach((shipPart) => {
            if(shipPart.location === gridCoordinate) {
                expect(shipPart.isHit).toBeTruthy();
            };
        });
    });
});