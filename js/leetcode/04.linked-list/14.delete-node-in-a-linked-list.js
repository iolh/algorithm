"use strict";
// 237: https://leetcode-cn.com/problems/delete-node-in-a-linked-list/
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
/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(root) {
    if (root === null)
        return;
    if (root.next === null) {
        root = null;
        return;
    }
    root.val = root.next.val;
    let delNode = root.next;
    root.next = delNode.next;
    delNode = null;
}
