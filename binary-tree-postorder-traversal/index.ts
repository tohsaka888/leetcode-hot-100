import { TreeNode } from "/type.ts";

/**
 * 二叉树的后序遍历
 * @date 2022-10-28
 * @param {any} root:TreeNode<number>|null
 * @returns {any}
 */
function postorderTraversal(root: TreeNode<number | null>): number[] {
  const exploredTree: TreeNode<number | null>[] = [];
  const res: number[] = [];

  while (root || exploredTree.length) {
    if (root) {
      exploredTree.push(root);
      res.unshift(root.val!);
      root = root.right;
    } else {
      const fNode = exploredTree.pop()!;
      root = fNode.left;
    }
  }

  return res;
}

export default postorderTraversal;
