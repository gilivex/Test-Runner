import assert from 'node:assert';
import test from 'node:test';
import { sum } from './sum';

test('adding numbers', () =>{
    const actual = sum(1, 2);
    const expected = 3;
    assert.strictEqual(actual, expected);
});
