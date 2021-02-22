// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { pluralize } = require('./pluralize');

test('should return "1 apple"', () => {
  expect(pluralize('apple', 1)).toEqual('1 apple');
});

test('should return "2 apples"', () => {
  expect(pluralize('apple', 2)).toEqual('2 apples');
});

test('should return "10 baloons"', () => {
  expect(pluralize('baloon', 10)).toEqual('10 baloons');
});

test('should return "0 degrees"', () => {
  expect(pluralize('degree', 0)).toEqual('0 degrees');
});

test('should return "-40 degrees"', () => {
  expect(pluralize('degree', -40)).toEqual('-40 degrees');
});