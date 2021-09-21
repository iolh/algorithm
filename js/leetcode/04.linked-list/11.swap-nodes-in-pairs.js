"use strict";
// 11: https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// 时间复杂度: O(n)
// 空间复杂度: O(1)
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
function swapPairs(head) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let p = dummyHead;
    while (p.next && p.next.next) {
        let node1 = p.next;
        let node2 = p.next.next;
        let next = node2.next;
        node2.next = node1;
        node1.next = next;
        p.next = node2;
        p = node1;
    }
    const returnNode = dummyHead.next;
    dummyHead = null;
    return returnNode;
}
