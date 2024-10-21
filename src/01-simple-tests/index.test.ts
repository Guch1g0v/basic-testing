import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Add });
    expect(result).toBe(4);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: Action.Subtract });
    expect(result).toBe(-1);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: -5, b: 3, action: Action.Multiply });
    expect(result).toBe(-15);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 99, b: 3, action: Action.Divide });
    expect(result).toBe(33);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 6,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(result).toBe(36);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 22, b: 13, action: 'null' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const res1 = simpleCalculator({ a: '2', b: 3, action: Action.Add });
    const res2 = simpleCalculator({ a: 2, b: null, action: Action.Add });
    const res3 = simpleCalculator({ a: 'abc', b: 10, action: Action.Add });
    expect(res1).toBeNull();
    expect(res2).toBeNull();
    expect(res3).toBeNull();
  });
});
