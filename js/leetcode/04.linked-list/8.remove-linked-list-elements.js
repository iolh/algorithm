"use strict";
// 203: https://coding.imooc.com/lesson/82.html#mid=2671
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
// 虚拟头指针
function removeElements0(head, val) {
    while (head !== null && head.val === val) {
        let delNode = head;
        head = delNode.next;
        delNode = null;
    }
    if (head === null)
        return null;
    let cur = head;
    while (cur.next !== null) {
        if (cur.next.val === val) {
            let delNode = cur.next;
            cur.next = delNode.next;
            delNode = null;
        }
        else {
            cur = cur.next;
        }
    }
    return head;
}
function removeElements1(head, val) {
    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let cur = dummyNode;
    while (cur.next !== null) {
        if (cur.next.val === val) {
            let delNode = cur.next;
            cur.next = delNode.next;
            delNode = null;
        }
        else {
            cur = cur.next;
        }
    }
    const returnNode = dummyNode.next;
    dummyNode = null;
    return returnNode;
}
