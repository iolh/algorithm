"use strict";
// 19: https://coding.imooc.com/lesson/82.html#mid=2740
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
function removeNthFromEnd(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let p = dummyHead;
    let q = dummyHead;
    for (let i = 0; i < n + 1; i++) {
        if (q) {
            q = q.next;
        }
    }
    while (q !== null) {
        p = p.next;
        q = q.next;
    }
    let delNode = p.next;
    p.next = delNode.next;
    delNode = null;
    let returnNode = dummyHead.next;
    dummyHead = null;
    return returnNode;
}
