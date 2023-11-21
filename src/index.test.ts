import { add } from '.';
import { expect } from 'chai';

describe('add', () => {
  it('adds', () => {
    expect(add(1, 2)).eq(3);
  });
});
