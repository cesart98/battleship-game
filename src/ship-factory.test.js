import Ship from './ship-factory';

describe('intialize new carrier ship', () => {
    let carrier = new Ship('carrier', 5);

    test('carrier is object', () => {
        expect(typeof(carrier)).toBe('object');
    });

    test('carrier length is five', () => {
        expect(carrier.shipParts.length).toEqual(5);
    });

    test('carrier ship parts have correct start values', () => {
        carrier.shipParts.every(shipPart => {
            expect(shipPart.isHit).toBeFalsy();
            expect(shipPart.location).toBeNull();
        })
    });

    test('carrier is not sunk', () => {
        expect(carrier.isSunk()).toBeFalsy();
        expect(carrier.isSunk()).not.toBeTruthy();
    });
});

describe('test ship functions', () => {
    let carrier = new Ship('carrier', 5);
    let shipLocation = [21, 22, 23, 24, 25];
    let gridCoordinate = 24;
    carrier.setLocation(shipLocation);
    carrier.recieveAttack(gridCoordinate);

    test('set ship location', () => {
        carrier.shipParts.forEach((shipPart, index) => {
            expect(shipPart.location).toEqual(shipLocation[index]);
        })
    });

    test('attack ship part', () => {
        carrier.shipParts.forEach((shipPart) => {
            if(shipPart.location === gridCoordinate) {
                expect(shipPart.isHit).toBeTruthy();
            }
        })
    });
});