import { TreeNode } from "/type.ts";

function postorderTraversal(root: TreeNode<number> | null): number[] {
  const exploredTree: TreeNode<number>[] = [];
  const res: number[] = [];

  while (root || exploredTree.length) {
    if (!root) {
      const fNode = exploredTree.pop()
      if (fNode!.right) {
        res.push(fNode!.right.val)
      }
    } else {
      while (root) {
        exploredTree.push(root!)
        if (!root.left) {
          break;
        } else {
            root = root.left
        }
      }
      root = root!.right
    }
  }

  return res;
}
