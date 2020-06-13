'use strict';
const LinkedList = require('./linked-list.js');

describe('Linked List insert(number)',()=>{
  test ('add anumber when the linked list is empty',()=>{
    // console.log(LinkedList.insert(1).head);
    expect(LinkedList.insert(1).head).toEqual({value:1,next:null});
  });
  test ('add anumber when the linked list is empty',()=>{
    // console.log(LinkedList.insert(1).head);
    expect(LinkedList.insert(2).head).toEqual({value:2,next:{value:1,next:null}});
  });
  test('includes number inside the Linked List',()=>{
    expect(LinkedList.includes(1)).toBeTruthy();
  });
  test('includes number inside the Linked List',()=>{
    expect(LinkedList.includes(10)).toBeFalsy();
  });
  test('to string ',()=>{
    expect(LinkedList.toString()).toEqual('{2} -> {1} -> NULL');
  });
});
describe('insertBefore, insertAfter, append  methods',()=>{
  test ('appending while the linked list is empty',()=>{
    expect(LinkedList.append(10).head).toEqual(LinkedList.head);
  });
  test ('add anumber at the end of the linked list',()=>{
    // console.log(LinkedList.insert(1).head);
    expect(LinkedList.append(2).head).toEqual(LinkedList.head);
  });
  test('insetrbefor if the the node is not exist',()=>{
    let error = `this value 15 is not exest in the linked list`;
    expect(LinkedList.insertBefore(15, 10)).toMatch(error);
  });
  test('insetrbefor 1',()=>{
    expect(LinkedList.insertBefore(1, 30).head).toEqual(LinkedList.head);
  });
  test('insetrAfter if the the node is not exist',()=>{
    let error = `this value 15 is not exest in the linked list`;
    expect(LinkedList.insertBefore(15, 10)).toMatch(error);
  });
  test('insetrAfter 1',()=>{
    expect(LinkedList.insertAfter(1, 100).head).toEqual(LinkedList.head);
  });

  test('to string ',()=>{
    expect(LinkedList.toString()).toEqual('{2} -> {30} -> {1} -> {100} -> {10} -> {2} -> NULL');
  });

  //////////////////////////kthFromEnd\\\\\\\\\\\\\\\\\\\\\\\
});
describe('kthFromEnd methods',()=>{
  test ('k is greater than the length of the linked list',()=>{
    let error = `the input 7 should not be negative or equal or more than 6 or the lenght of the linked list is 1`;
    expect(LinkedList.kthFromEnd(7)).toMatch(error);
  });
  test('k and the length of the list are the same',()=>{
    let error = `the input 6 should not be negative or equal or more than 6 or the lenght of the linked list is 1`;
    expect(LinkedList.kthFromEnd(6)).toMatch(error);
  });
  test('k and the length of the list are the same',()=>{
    let error = `the input -10 should not be negative or equal or more than 6 or the lenght of the linked list is 1`;
    expect(LinkedList.kthFromEnd(-10)).toMatch(error);
  });
  test('the linked list is of a size 1',()=>{
    let hi = require('./linked-list.js').hi;
    hi.insert(3);
    let error = `the input 1 should not be negative or equal or more than 1 or the lenght of the linked list is 1`;
    expect(hi.kthFromEnd(1)).toMatch(error);
  });
  test('k is not at the end, but somewhere in the middle of the linked list',()=>{
    expect(LinkedList.kthFromEnd(2)).toEqual(100);
  });
});
