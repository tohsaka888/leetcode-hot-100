import { TreeNode } from "../type.ts";
import { arrayToTree } from "../utils/array-to-tree.ts";

/**
 * 相同的树
 * @date 11/7/2022 - 4:51:54 PM
 *
 * @template T
 * @param {TreeNode<T>} p
 * @param {TreeNode<T>} q
 * @returns {boolean}
 */
function isSameTree<T>(p: TreeNode<T>, q: TreeNode<T>) {
  let res = true;
  // 递归解法
  function traverse(t1: TreeNode<T>, t2: TreeNode<T>) {
    if (res) {
      if (t1 && t2) {
        if (t1.val === t2.val) {
          traverse(t1.left, t2.left);
          traverse(t1.right, t2.right);
        } else {
          res = false;
        }
      } else if (!t1 && !t2) {
        return;
      } else {
        res = false;
      }
    }
  }
  traverse(p, q);
  return res;
}

const result = isSameTree<number | null>(
  arrayToTree<number | null>([1, null, 2, 3]),
  arrayToTree<number | null>([1, 2, 3])
);

console.log(result);
