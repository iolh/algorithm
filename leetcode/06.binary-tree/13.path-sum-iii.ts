// 437: https://leetcode-cn.com/problems/path-sum-iii/

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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0;

  let res = findPath(root, targetSum);
  res += pathSum(root.left, targetSum);
  res += pathSum(root.right, targetSum);

  return res;
}

function findPath(node: TreeNode | null, num: number): number {
  if (node === null) {
    return 0;
  }

  let res = 0;

  if (node.val === num) {
    res += 1;
  }

  res += findPath(node.left, num - node.val);
  res += findPath(node.right, num - node.val);

  return res;
}
