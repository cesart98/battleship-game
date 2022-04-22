import Gameboard from './gameboard';
import Ship from './ship-factory';

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

describe('correctly execute gameboard functions', () => {

    let carrier = new Ship('carrier', 5);
    let gridSquares = [21, 22, 23, 24, 25];
    let gridSquareToAttack = 24;

    let gameboard = new Gameboard();

    carrier.setLocation(gridSquares);
    gameboard.placeShipAt(carrier, gridSquares);

    test('each grid square has correct values', () => {
        gameboard.gridSquares.forEach((gridSquare, index) => {
            if(gridSquares[index] === (index + 1)) {
                expect(gridSquare.hasShip).toBeTruthy();
                expect(gridSquare.shipName).toBe(carrier.name);
            };
        })
    });
    /*
    carrier.recieveAttack(gridSquareToAttack);
    gameboard.recieveAttack(gridSquareToAttack);

    test('attack ship part', () => {
        gameboard.gridSquares.forEach((gridSquare) => {
            if(gridSquare.location === gridSquareToAttack) {
                expect(gridSquare.isHit).toBeTruthy();
            }
        })
    });
    */
});