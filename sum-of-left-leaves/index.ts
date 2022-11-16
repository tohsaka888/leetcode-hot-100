import { TreeNode } from "../type.ts";

/**
 * 左叶子之和
 * @date 11/16/2022 - 4:15:58 PM
 *
 * @param {TreeNode<number>} root
 * @returns {number}
 */
const sumOfLeftLeaves = (root: TreeNode<number>): number => {
  let sum = 0;
  function traverse(node: TreeNode<number>) {
    if (node) {
      if (node.left) {
        if (!node.left.left && !node.left.right) {
          sum += node.left.val!;
        }
      }
      traverse(node.left);
      traverse(node.right);
    }
  }
  traverse(root);
  return sum;
};

export default sumOfLeftLeaves;
