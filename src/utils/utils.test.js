import { checkPrice, timeConventer } from './index';

describe('Utils test', () => {
  test('checkPrice should return correct price', () => {
    const positiveNumber = 4;
    const negativeNumber = -2;

    expect(checkPrice(positiveNumber)).toBe(positiveNumber + ' $');
    expect(checkPrice(negativeNumber)).toBe('FREE');
  });

  test('timeConventer should return millis turned into sinutes & seconds', () => {
    const testMills1 = 9000;
    const testMills2 = 260000;

    expect(timeConventer(testMills1)).toBe('0:09');
    expect(timeConventer(testMills2)).toBe('4:20');
  });
});
