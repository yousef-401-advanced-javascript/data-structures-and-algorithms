'use strict';
const insertShiftArray = require('./array-shift');
let arr = [1,2,3,4,5];
let arr2 = [1,2,3,4];
test('shifting the number to the middle of the array', () => {
  expect(insertShiftArray(arr, 200)).toEqual([1,2,3,200,4,5]);
});
test('shifting the number to the middle of the array', () => {
  expect(insertShiftArray(arr2, 100)).toEqual([1,2,100,3,4]);
});
test('the array is empty', () => {
  expect(insertShiftArray([], 100)).toBeFalsy();
});
test('if the inputs is not an array and anumber(failer)', () => {
  expect(insertShiftArray(10, 100)).toBeFalsy();
});
  