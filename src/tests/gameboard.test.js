import Gameboard from '../gameboard';
import Ship from '../ship-factory';

describe('correctly intialize new gameboard', () => {
    let gameboard = new Gameboard('gameboardOne');

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
    let gameboard = new Gameboard('gameboardOne');

    let gridSquareArray = [21, 22, 23, 24, 25];
    let gridCoordinate = 24;

    let carrier = new Ship('carrier', 5);
    carrier.setLocation(gridSquareArray);

    gameboard.placeShipAt(carrier, gridSquareArray);

    test('each grid square has correct values', () => {
        gameboard.gridSquares.forEach((gridSquare, index) => {
            if((index + 1) === gridSquareArray[index]) {
                expect(gridSquare.hasShip).toBeTruthy();
                expect(gridSquare.shipName).toBe(carrier.name);
            }
        })
    });

    carrier.recieveAttack(gridCoordinate);
    gameboard.receiveAttack(gridCoordinate);

    test('grid square attacked has correct values', () => {
        let attackedGridSquare = gameboard.gridSquares[gridCoordinate - 1]
        expect(attackedGridSquare.isHit).toBeTruthy();
    });

    let missedGridSquares = gameboard.getMissedAttacks();

    test('correctly return missed attacks on board', () => {
        gameboard.gridSquares.forEach((gridSquare, index) => {
            if(missedGridSquares.includes(index)) {
                expect(gridSquare.isHit).toBeTruthy();
                expect(gridSquare.hasShip).toBeFalsy();
            }
        })
    });

    test('returns correct value when checking for ships sunk', () => {
        expect(gameboard.areShipsSunk()).toBeFalsy();
        expect(gameboard.areShipsSunk()).not.toBeTruthy();
    });
});