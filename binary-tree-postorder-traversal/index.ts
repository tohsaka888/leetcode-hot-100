import { TreeNode } from "/type.ts";

function postorderTraversal(root: TreeNode<number> | null): number[] {
  const exploredTree: TreeNode<number>[] = [];
  const res: number[] = [];

  while (root || exploredTree.length) {
    if (root) {
      exploredTree.push(root);
      res.unshift(root.val);
      root = root.right;
    } else {
      const fNode = exploredTree.pop()!;
      root = fNode.left;
    }
  }

  return res;
}
