import Gameboard from './gameboard';
describe('correctly intialize new gameboard', () => {
    let gameboard = new Gameboard();

    test('gameboard is object', () => {
        expect(typeof(gameboard)).toBe('object');
    });

    test('grid squares length is 100', () => {
        expect(gameboard.gridSquares.length).toEqual(100);
        

    });

    test('grid squares have correct start values', () => {
        gameboard.gridSquares.every(gridSquare => {
            expect(gridSquare.isHit).toBeFalsy();
            expect(gridSquare.hasShip).toBeFalsy();
            expect(gridSquare.shipName).toBeNull();
        })
    });

    test('gameboard has no missed attacks', () => {
        expect(gameboard.getMissedAttacks()).toEqual(Array.of());
    });
});
/*
describe('correctly execute gameboard functions', () => {
    let gameboard = new Gameboard();
    let shipLocation = [21, 22, 23, 24, 25];
    let gridCoordinate = 24;
    gameboard.setLocation(shipLocation);
    gameboard.recieveAttack(gridCoordinate);

    test('set ship location', () => {
        gameboard.gridSquares.forEach((gridSquare, index) => {
            expect(gridSquare.location).toEqual(shipLocation[index]);
        })
    });

    test('attack ship part', () => {
        gameboard.gridSquares.forEach((gridSquare) => {
            if(gridSquare.location === gridCoordinate) {
                expect(gridSquare.isHit).toBeTruthy();
            }
        })
    });
});
*/