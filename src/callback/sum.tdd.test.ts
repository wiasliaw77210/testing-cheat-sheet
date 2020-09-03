import { assert } from 'chai';

import sum from './sum';

suite('Sum function', () => {
  test('assert to be 15', () => {
    sum(10, 5, (result, err) => {
      assert.equal(result, 15);
      assert.isNull(err);
    });
  });

  test('assert to get NaN and Error', () => {
    assert.throws(
      () => {
        sum(5, Number.NaN, (result, err) => {
          assert.isNaN(result);
          // assert.throw require fn to throw error
          if (err) throw err;
        });
      },
      // error message will be check here
      'NaN or Infinity',
    );
  });

  test('assert to get Infinity and Error', () => {
    assert.throws(
      () => {
        sum(5, Infinity, (result, err) => {
          assert.equal(result, Infinity);
          if (err) throw err;
        });
      },
      'NaN or Infinity',
    );
  });
});
