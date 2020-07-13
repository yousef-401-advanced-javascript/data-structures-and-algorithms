'use strict';

const InsertionSort = require('./insertion-sort.js');

describe('insertion sort', () => {
  it('any array', () => {
    const arr = [9, 1, 2, 55, 16, 111];
    InsertionSort(arr);
    expect(arr).toEqual([1, 2, 9, 16, 55, 111]);
  });

  it('reverse-sorted array', () => {
    const reverseArr = [20, 18, 12, 8, 5, -2];
    InsertionSort(reverseArr);
    expect(reverseArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('few-uniques array', () => {
    const fewUniquesArr = [5, 12, 7, 5, 5, 7];
    InsertionSort(fewUniquesArr);
    expect(fewUniquesArr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('nearly-sorted array', () => {
    const nearlyArr = [2, 3, 5, 7, 13, 11];
    InsertionSort(nearlyArr);
    expect(nearlyArr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});