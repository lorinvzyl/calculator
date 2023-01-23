const calculator = require('./script');

describe('add', () => {
    test('adds 0 and 0', () => {
        expect(script.add(0,0).toBe(0));
    });
    test('adds 2 and 2', () => {
        expect(script.add(2,2).toBe(4));
    });
    test('adds positive numbers', () => {
        expect(script.add(2,6).toBe(8));
    });
    test('adds large numbers', () => {
        expect(script.add(124,237).toBe(351));
    });
    test('adds decimals', () => {
        expect(script.add(5,.5).toBe(5.5));
    });
    test('adds decimals 2', () => {
        expect(script.add(7.3,0.5).toBe(7.8));
    });
    test('adds negatives', () => {
        expect(script.add(-5,12).toBe(7));
    });
    test('adds negatives 2', () => {
        expect(script.add(-5,-12).toBe(-17));
    });
});

describe('subtract', () => {
    test('subtracts 0 and 0', () => {
        expect(script.subtract(0,0).toBe(0));
    });
    test('subtracts 2 and 2', () => {
        expect(script.subtract(2,2).toBe(0));
    });
    test('subtracts positive numbers', () => {
        expect(script.subtract(6,2).toBe(4));
    });
    test('subtracts large numbers', () => {
        expect(script.subtract(237,124).toBe(113));
    });
    test('subtracts decimals', () => {
        expect(script.subtract(5,0.5).toBe(4.5));
    });
    test('subtracts decimals 2', () => {
        expect(script.subtract(7.3,0.5).toBe(6.8));
    });
    test('subtracts negatives', () => {
        expect(script.subtract(-5,12).toBe(-17));
    });
    test('subtracts negatives 2', () => {
        expect(script.subtract(-5,-12).toBe(7));
    });
});

describe('multiply', () => {
    test('multiplies two numbers', () => {
        expect(script.multiply(2,12).toBe(24));
    });
    test('multiplies negatives', () => {
        expect(script.multiply(-5,12).toBe(-60));
    });
    test('subtracts negatives 2', () => {
        expect(script.multiply(-5,-12).toBe(60));
    });
    test('multiplies decimals', () => {
        expect(script.multiply(0.3,0.7).toBe(0.21));
    });
    test('multiplies large numbers', () => {
        expect(script.multiply(124,328).toBe(40672));
    });
});

describe('divide', () => {
    test('divides two numbers', () => {
        expect(script.divide(12,2).toBe(6));
    });
    test('divides negatives', () => {
        expect(script.divide(12,-4).toBe(-3));
    });
    test('divides negatives 2', () => {
        expect(script.divide(-30,-6).toBe(5));
    });
    test('divides decimals', () => {
        expect(script.divide(0.8,0.2).toBe(0.21));
    });
    test('divides large numbers', () => {
        expect(script.divide(100524,8377).toBe(12));
    });
});
