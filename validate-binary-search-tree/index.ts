import { TreeNode } from "../type.ts";

/**
 * 验证二叉搜索树
 * @date 11/26/2022 - 12:14:23 PM
 *
 * @template T = number
 * @param {TreeNode<T>} root
 * @returns {boolean}
 */
const isValidBST = <T = number>(root: TreeNode<T>): boolean => {
  let res = true;
  // pre 为上一次遍历节点
  let pre = -Infinity;
  function traverse(node: TreeNode<T>) {
    if (node) {
      traverse(node.left);
      // 因为搜索二叉树的中序遍历一定是递增的
      // 所以当前输出的值一定比上一次的值要大
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
