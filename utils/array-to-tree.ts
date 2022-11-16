import { TreeNode } from "../type.ts";

function createTree<T>(root: TreeNode<T>, leftVal: T, rightVal: T) {
  if (root) {
    if (leftVal) {
      root.left = {
        val: leftVal,
        left: null,
        right: null,
      };
    }
    if (rightVal) {
      root.right = {
        val: rightVal,
        left: null,
        right: null,
      };
    }
  }
}

function arrayToTree<T>(arr: T[]) {
  if (!arr.length) {
    return null;
  }
  let i = 0;
  const tree: TreeNode<T> = { val: arr[0], left: null, right: null };
  const queue = [tree];
  while (i < arr.length) {
    const node = queue.shift();
    if (node) {
      createTree(node, arr[i + 1], arr[i + 2]);
      i = i + 2;
      queue.push(node.left!, node.right!);
    }
  }
  return tree;
}

export { arrayToTree };
