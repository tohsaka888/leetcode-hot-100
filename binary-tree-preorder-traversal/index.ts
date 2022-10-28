import { TreeNode } from "/type.ts";

function preorderTraversal(root: TreeNode<number> | null): number[] {
  const exploredTree: TreeNode<number>[] = [];
  const res: number[] = [];
  while (exploredTree.length || root) {
    if (root) {
      res.push(root!.val);
      exploredTree.push(root);
      root = root.left;
    } else {
      const fNode = exploredTree.pop();
      root = fNode!.right;
    }
  }

  return res;
}
