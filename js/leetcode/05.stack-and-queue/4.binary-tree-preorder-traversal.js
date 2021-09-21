"use strict";
// 144: https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
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
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
class Command {
    constructor(s, node) {
        this.s = s;
        this.node = node;
    }
}
function preorderTraversal(root) {
    const res = [];
    if (root === null)
        return res;
    const stack = [];
    stack.push(new Command('go', root));
    while (stack.length > 0) {
        const command = stack.pop();
        if (command.s === 'print') {
            res.push(command.node.val);
        }
        else {
            if (command.node.right) {
                stack.push(new Command('go', command.node.right));
            }
            if (command.node.left) {
                stack.push(new Command('go', command.node.left));
            }
            stack.push(new Command('print', command.node));
        }
    }
    return res;
}
