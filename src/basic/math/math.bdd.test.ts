import { expect } from 'chai';

import * as math from './math';

describe('Math module', () => {
  context('adder', () => {
    it('should be equaled to 3', () => {
      expect(math.adder(1, 2)).to.equal(3);
    });
  });

  context('suber', () => {
    it('should be equaled to 3', () => {
      expect(math.suber(6, 3)).to.equal(3);
    });
  });

  context('muler', () => {
    it('should be equaled to 8', () => {
      expect(math.muler(4, 2)).to.equal(8);
    });
  });

  context('diver', () => {
    it('should be equaled to 3', () => {
      expect(math.diver(9, 3)).to.equal(3);
    });
  });
});
