import { TreeNode } from "../type.ts";

/**
 * 恢复二叉搜索树
 * @date 11/26/2022 - 12:33:14 PM
 *
 * @template T = number
 * @param {TreeNode<T>} root
 * @returns {TreeNode<T>}
 */
function recoverTree<T = number>(root: TreeNode<T>): TreeNode<T> {
  let pre: TreeNode<T> = null;
  const needSwitch: TreeNode<T>[] = [];
  function traverse(node: TreeNode<T>) {
    if (node) {
      traverse(node.left);
      if (pre) {
        if (node.val <= pre.val) {
          needSwitch.push(pre, node);
        }
      }
      pre = node;
      traverse(node.right);
    }
  }
  traverse(root);

  const first = needSwitch[0]!;
  const last = needSwitch[needSwitch.length - 1]!;
  [first.val, last.val] = [last.val, first.val];

  return root;
}

export default recoverTree;
