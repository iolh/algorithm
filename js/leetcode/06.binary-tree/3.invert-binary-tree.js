"use strict";
// 226: https://leetcode-cn.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function invertTree(root) {
    if (root === null)
        return null;
    invertTree(root.left);
    invertTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
}