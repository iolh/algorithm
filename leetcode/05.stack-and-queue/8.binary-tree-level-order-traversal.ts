// 102: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

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

function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if (root === null) {
    return res;
  }

  let q: [TreeNode, number][] = [];

  q.push([root, 0]);

  while (q.length !== 0) {
    const element = q.shift();
    const node = element![0];
    const level = element![1];

    if (level === res.length) {
      res.push([]);
    }

    res[level].push(node.val);

    if (node.left) {
      q.push([node.left, level + 1]);
    }

    if (node.right) {
      q.push([node.right, level + 1]);
    }
  }

  return res;
}
