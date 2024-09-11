import { formatDate } from './formatDate';
import { isToday } from 'date-fns';

jest.mock('date-fns', () => ({
  isToday: jest.fn(),
}));

describe('formatDate', () => {
  test('should format date', () => {
    const mockedIsToday = jest.mocked(isToday);
    mockedIsToday.mockReturnValue(true);

    const result = formatDate(new Date('2024'));
    expect(result).toEqual('It is today');
  });
});
