"use strict";
// 257: https://coding.imooc.com/lesson/82.html#mid=2684
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
function binaryTreePaths(root) {
    const res = [];
    if (root === null)
        return res;
    if (root.left === null && root.right === null) {
        res.push(root.val.toString());
        return res;
    }
    const leftS = binaryTreePaths(root.left);
    for (let i = 0; i < leftS.length; i++) {
        res.push(root.val.toString() + '->' + leftS[i]);
    }
    const rightS = binaryTreePaths(root.right);
    for (let i = 0; i < rightS.length; i++) {
        res.push(root.val.toString() + '->' + rightS[i]);
    }
    return res;
}
