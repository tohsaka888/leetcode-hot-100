import { TreeNode } from "/type.ts";
import { arrayToTree } from "/utils/array-to-tree.ts";

/**
 * 二叉树的锯齿形层序遍历
 * @date 11/16/2022 - 10:31:15 AM
 *
 * @template T = number
 * @param {TreeNode<T>} root
 * @returns {T[][]}
 */
const zigzagLevelOrder = <T = number>(root: TreeNode<T>): T[][] => {
  const result: T[][] = [];
  const queue: TreeNode<T>[] = [];
  let direction: "left" | "right" = "left";

  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const levelLength = queue.length;
    const row: T[] = [];

    for (let i = 0; i < levelLength; i++) {
      const node = queue.shift()!;
      if (direction === "left") {
        row.push(node.val);
      } else {
        row.unshift(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(row);
    direction === "left" ? (direction = "right") : (direction = "left");
  }
  return result;
};

// const result = zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7]));
// console.log(result);

export default zigzagLevelOrder;
