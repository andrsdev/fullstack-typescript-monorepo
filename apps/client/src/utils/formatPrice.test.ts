import { formatPrice } from './formatPrice';

describe('format price', () => {
  it('should format price', () => {
    const result = formatPrice(1000);
    expect(result).toEqual('$10.00');
  });
});
