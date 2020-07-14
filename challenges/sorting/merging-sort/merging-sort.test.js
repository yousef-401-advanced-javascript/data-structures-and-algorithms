'use strict';

const mergeSort = require('./merging-sort.js');

describe('insertion sort', () => {
  it('any array', () => {
    const arr = [9, 1, 2, 55, 16, 111];
    mergeSort(arr);
    expect(arr).toEqual([1, 2, 9, 16, 55, 111]);
  });

  it('reverse-sorted array', () => {
    const reverseArr = [20, 18, 12, 8, 5, -2];
    mergeSort(reverseArr);
    expect(reverseArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('few-uniques array', () => {
    const fewUniquesArr = [5, 12, 7, 5, 5, 7];
    mergeSort(fewUniquesArr);
    expect(fewUniquesArr).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('nearly-sorted array', () => {
    const nearlyArr = [2, 3, 5, 7, 13, 11];
    mergeSort(nearlyArr);
    expect(nearlyArr).toEqual([2, 3, 5, 7, 11, 13]);
  });
});