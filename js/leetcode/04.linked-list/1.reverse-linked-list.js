"use strict";
// 206: https://leetcode-cn.com/problems/reverse-linked-list/
// 时间复杂度 O(n)
// 空间复杂度 O(1)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function reverseList(head) {
    let pre = null;
    let cur = head;
    while (cur !== null) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}
// cur = head;
// pre = null;
// next = head.next;
// cur.next = pre;
// pre = cur
// cur = next;
// next = cur.next;
function createLinkedList(arr) {
    if (arr.length === 0)
        return null;
    const head = new ListNode(arr[0]);
    let curNode = head;
    for (let i = 1; i < arr.length; i++) {
        curNode.next = new ListNode(arr[i]);
        curNode = curNode.next;
    }
    return head;
}
function printLinkedList(head) {
    let curNode = head;
    let s = '';
    while (curNode !== null) {
        s += `${curNode.val} -> `;
        curNode = curNode.next;
    }
    console.log(s + 'null' + '\n');
}
let arr = [1, 2, 3, 4, 5];
const head = createLinkedList(arr);
printLinkedList(head);
const head2 = reverseList(head);
printLinkedList(head2);
