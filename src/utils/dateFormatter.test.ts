import { dateFormatter } from './dateFormatter';

describe('dateFormatter', () => {
  it('should format the date correctly', () => {
    const date = new Date('2025-01-01T12:34:56');
    const formattedDate = dateFormatter(date);
    expect(formattedDate).toBe('1 Jan 25, 12:34 pm');
  });

  it('should handle different timezones', () => {
    const date = new Date('2025-03-03T12:34:56Z');
    const formattedDate = dateFormatter(date);
    expect(formattedDate).toBe('3 Mar 25, 8:34 pm');
  });
});
