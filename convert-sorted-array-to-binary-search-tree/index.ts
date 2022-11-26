import { TreeNode } from "/type.ts";

/**
 * 将有序数组转换为二叉搜索树
 * @date 11/26/2022 - 4:38:10 PM
 *
 * @template T = number
 * @param {T[]} nums
 * @returns {TreeNode<T>}
 */
function sortedArrayToBST<T = number>(nums: T[]): TreeNode<T> {
  function traverse(start: number, end: number): TreeNode<T> {
    if (start > end) {
      return null;
    }

    const mid = start + Math.floor((end - start) / 2);
    const node: TreeNode<T> = { val: nums[mid], left: null, right: null };
    node.left = traverse(start, mid - 1);
    node.right = traverse(mid + 1, end);
    return node;
  }
  return traverse(0, nums.length - 1);
}

export default sortedArrayToBST;
