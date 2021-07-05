import { checkPrice, timeConventer } from './index';

describe('Utils test', () => {
  const positiveNumber = 4;
  const negativeNumber = -2;
  const testMills1 = 9000;
  const testMills2 = 260000;

  test('checkPrice should return correct price', () => {
    expect(checkPrice(positiveNumber)).toBe(positiveNumber + ' $');
    expect(checkPrice(negativeNumber)).toBe('FREE');
  });

  test('timeConventer should return millis turned into sinutes & seconds', () => {
    expect(timeConventer(testMills1)).toBe('0:09');
    expect(timeConventer(testMills2)).toBe('4:20');
  });
});
