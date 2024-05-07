import { currencyFormatter } from './currencyFormatter';

describe('currencyFormatter', () => {
  it('should format the currency correctly', () => {
    const symbol = '$';
    const value = '1000.50';
    const expected = '$ 1000.50';

    const result = currencyFormatter(symbol, value);

    expect(result).toBe(expected);
  });

  it('should handle negative values', () => {
    const symbol = '€';
    const value = '-500.75';
    const expected = '€ -500.75';

    const result = currencyFormatter(symbol, value);

    expect(result).toBe(expected);
  });

  it('should handle zero value', () => {
    const symbol = '¥';
    const value = '0';
    const expected = '¥ 0.00';

    const result = currencyFormatter(symbol, value);

    expect(result).toBe(expected);
  });
});
