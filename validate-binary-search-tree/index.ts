import { TreeNode } from "../type.ts";

const isValidBST = <T = number>(root: TreeNode<T>): boolean => {
  let res = true;
  let pre = -Infinity;
  function traverse(node: TreeNode<T>) {
    if (node) {
      traverse(node.left);
      if (node.val <= pre) {
        res = false;
      }
      pre = node.val as number;
      traverse(node.right);
    }
  }
  traverse(root);
  return res;
};

export default isValidBST;
