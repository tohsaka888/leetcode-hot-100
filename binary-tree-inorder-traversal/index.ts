import { TreeNode } from "/type.ts";

type InorderTraversalFunc<T = number> = (root: TreeNode<T> | null) => T[];

/**
 * 二叉树的中序遍历
 * @date 2022-10-28
 * @param {any} root
 * @returns {any}
 */
const inorderTraversal: InorderTraversalFunc = (root) => {
  const res: number[] = [];
  const exploredTree: TreeNode<number>[] = [];

  while (root || exploredTree.length) {
    while (root) {
      exploredTree.push(root);
      root = root.left;
    }
    const fNode = exploredTree.pop();
    res.push(fNode!.val);
    root = fNode!.right;
  }

  return res;
};
