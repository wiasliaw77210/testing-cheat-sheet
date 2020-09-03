import { assert } from 'chai';

import * as math from './math';

suite('Math module', () => {
  suite('adder', () => {
    test('should be equaled to 3', () => {
      assert.equal(math.adder(1, 2), 3)
    });
  });

  suite('suber', () => {
    test('should be equaled to 3', () => {
      assert.equal(math.suber(6, 3), 3);
    });
  });

  suite('muler', () => {
    test('should be equaled to 8', () => {
      assert.equal(math.muler(4, 2), 8);
    });
  });

  suite('diver', () => {
    test('should be equaled to 3', () => {
      assert.equal(math.diver(9, 3), 3);
    });
  });
});