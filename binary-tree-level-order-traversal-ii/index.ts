import { TreeNode } from "../type.ts";

const levelOrderBottom = <T = number>(root: TreeNode<T>): T[][] => {
  const result: T[][] = [];
  const queue: TreeNode<T>[] = [];
  if (root) {
    queue.push(root);
  }

  while (queue.length) {
    const levelLength = queue.length;
    const row = [];
    for (let i = 0; i < levelLength; i++) {
      const node: TreeNode<T> = queue.shift()!;
      row.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.unshift(row);
  }

  return result;
};

export default levelOrderBottom;
