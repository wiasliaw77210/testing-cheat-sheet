import { expect } from 'chai';

import * as math from './math';

suite('Math module', () => {
  suite('adder', () => {
    test('should be equaled to 3', () => {
      expect(math.adder(1, 2)).to.equal(3);
    });
  });

  suite('suber', () => {
    test('should be equaled to 3', () => {
      expect(math.suber(6, 3)).to.equal(3);
    });
  });

  suite('muler', () => {
    test('should be equaled to 8', () => {
      expect(math.muler(4, 2)).to.equal(8);
    });
  });

  suite('diver', () => {
    test('should be equaled to 3', () => {
      expect(math.diver(9, 3)).to.equal(3);
    });
  });
});