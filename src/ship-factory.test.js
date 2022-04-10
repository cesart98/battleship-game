const Carrier = require('./ship-factory');

test('intialize new carrier object', () => {
    let carrier = new Carrier();
    expect(typeof(carrier)).toBe('object');
    expect(carrier.shipParts.length).toEqual(5);
    carrier.shipParts.every(shipPart => {
        expect(shipPart.isHit).toBeFalsy();
        expect(shipPart.location).toBeNull();
    })
});
/*
test('set location of ship', () => {
    let carrier = new Carrier();
    carrier.setLocation([21, 22, 23, 24, 25]);
    expect(carrier.shipParts).toBe('object');
});

test('intialize new carrier object', () => {
    let carrier = new Carrier();
    expect(typeof(carrier)).toBe('object');
});
*/