import { TreeNode } from "../type.ts";
import { arrayToTree } from "../utils/array-to-tree.ts";

/**
 * 二叉树的层序遍历(BFS)
 * @date 11/15/2022 - 3:45:41 PM
 *
 * @template T = number
 * @param {TreeNode<T>} root
 * @returns {T[][]}
 */
const levelOrder = <T = number>(root: TreeNode<T>): T[][] => {
  const result: T[][] = [];
  const queue: TreeNode<T>[] = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    // get the length of the queue named `levelLength`
    // it means we get the length of the current level
    const levelLength = queue.length;

    // it stores all nodes of the current level
    const row: T[] = [];

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift()!;
      row.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(row);
  }

  return result;
};

// const result = levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]));
// console.log(result);

export default levelOrder;
