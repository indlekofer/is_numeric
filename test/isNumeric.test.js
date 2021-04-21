import assert from 'assert';

import isNumeric from '../src/index';

describe('isNumeric true checks', () => {
  it('numeric string', () => {
    assert.equal(true, isNumeric("1"));
  });
  it('integer', () => {
    assert.equal(true, isNumeric(2));
  });
  it('numeric string with leading 0', () => {
    assert.equal(true, isNumeric("012"));
  });
  it('another numeric string', () => {
    assert.equal(true, isNumeric("334"));
  });
  it('numeric string with 0', () => {
    assert.equal(true, isNumeric("0"));
  });
  it('new Number', () => {
    assert.equal(true, isNumeric(new Number(1)));
  });
  it('pi', () => {
    assert.equal(true, isNumeric(Math.PI));
  });
});
describe('isNumeric false checks', () => {
  it('null', () => {
    assert.equal(false, isNumeric(null));
  });
  it('empty string', () => {
    assert.equal(false, isNumeric(""));
  });
  it('space string', () => {
    assert.equal(false, isNumeric(" "));
  });
  it('invalid mixed string', () => {
    assert.equal(false, isNumeric("a02"));
  });
  it('invalid mixed string', () => {
    assert.equal(false, isNumeric("2aaa1"));
  });
  it('infinity', () => {
    assert.equal(false, isNumeric(1/0));
  });
  it('negative infinity', () => {
    assert.equal(false, isNumeric(-1/0));
  });
  it('array', () => {
    assert.equal(false, isNumeric([3,4,5,6]));
  });
  it('object', () => {
    assert.equal(false, isNumeric({test:"test2"}));
  });
  it('undefined', () => {
    assert.equal(false, isNumeric());
  });
  it('boolean true', () => {
    assert.equal(false, isNumeric(true));
  });
  it('boolean false', () => {
    assert.equal(false, isNumeric(false));
  });
});
