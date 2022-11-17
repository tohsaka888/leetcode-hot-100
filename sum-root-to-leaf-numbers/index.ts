import { TreeNode } from "../type.ts";

/**
 * 求根节点到叶节点数字之和
 * @date 11/17/2022 - 10:57:37 AM
 *
 * @template T = number
 * @param {TreeNode<T>} root
 * @returns {number}
 */
const sumNumbers = <T = number>(root: TreeNode<T>) => {
  const sums: string[] = [];
  function traverse(node: TreeNode<T>, sum: string) {
    if (node) {
      sum += node.val;
      if (!node.left && !node.right) {
        sums.push(sum);
      } else {
        traverse(node.left, sum);
        traverse(node.right, sum);
      }
    }
  }

  traverse(root, "");
  let sum = 0;
  sums.forEach((val) => (sum += +val));
  return sum;
};

export default sumNumbers;
