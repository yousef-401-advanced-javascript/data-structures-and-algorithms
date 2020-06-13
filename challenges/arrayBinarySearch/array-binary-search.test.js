'use strict';
const BinarySearch = require('./array-binary-search.js');
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4];
test('the number is larger than the mid number in the array', () => {
  expect(BinarySearch(arr, 4)).toEqual(3);
});
test('the number is less than the mid number in the array', () => {
  expect(BinarySearch(arr2, 1)).toEqual(0);
});
test('the array is empty', () => {
  expect(BinarySearch([], 100)).toEqual(-1);
});
test('when the first input is a number', () => {
  expect(BinarySearch(10, 100)).toEqual(-1);
});