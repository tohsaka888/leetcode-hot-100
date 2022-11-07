import { arrayToTree } from "../utils/array-to-tree.ts";
import { TreeNode } from "/type.ts";

type InorderTraversalFunc<T = number | null> = (
  root: TreeNode<T> | null
) => T[];

/**
 * 二叉树的中序遍历
 * @date 2022-10-28
 * @param {any} root
 * @returns {any}
 */
const inorderTraversal: InorderTraversalFunc = (root) => {
  const res: number[] = [];
  const exploredTree: TreeNode<number | null>[] = [];

  while (root || exploredTree.length) {
    if (root) {
      exploredTree.push(root);
      root = root.left;
    } else {
      const fNode = exploredTree.pop();
      res.push(fNode!.val!);
      root = fNode!.right;
    }
  }

  return res;
};

const result = inorderTraversal(arrayToTree([1, null, 2, 3]));

console.log(result);
