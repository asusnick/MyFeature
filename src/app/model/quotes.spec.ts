import {Quotes} from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes('Test test test')).toBeTruthy();
  });
});