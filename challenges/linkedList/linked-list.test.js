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