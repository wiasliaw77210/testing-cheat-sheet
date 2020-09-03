import { expect } from 'chai';

import sum from './sum';

describe('Sum function', () => {
  it('should be 15', () => {
    sum(10, 5, (result, err) => {
      expect(result).to.equal(15);
      expect(err).to.null;
    });
  });

  it('should get NaN and Error', () => {
    sum(5, Number.NaN, (result, err) => {
      expect(result).to.be.NaN;
      expect(err).to.be.a('error');
    });
  });

  it('should get Infinity and Error', () => {
    sum(5, 20/0, (result, err) => {
      expect(result).to.equal(Infinity);
      // expect(result).to.be.finite;
      expect(err).to.be.a('error');
    });
  });
});
