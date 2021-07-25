import { Numbers } from './Numbers';

describe('Numbers', () => {
  it('parses string to number', () => {
    expect(Numbers.parseOrElse('100')).toBe(100);
  });
  it('parses `or`, when argument is not valid', () => {
    expect(Numbers.parseOrElse('', '100')).toBe(100);
  });
});
