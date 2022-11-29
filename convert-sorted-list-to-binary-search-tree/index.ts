import { ListNode, TreeNode } from "../type.ts";

/**
 * 有序链表转换二叉搜索树
 * @date 11/29/2022 - 9:33:44 AM
 *
 * @template T = number
 * @param {ListNode<T>} head
 * @returns {TreeNode<T>}
 */
const sortedListToBST = <T = number>(head: ListNode<T>): TreeNode<T> => {
  const arr: T[] = [];

  // 将链表转化为数组
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  /**
   * 递归构建二叉搜索树
   * @date 11/29/2022 - 9:34:10 AM
   *
   * @param {number} start
   * @param {number} end
   * @returns {TreeNode<T>}
   */
  function dfs(start: number, end: number): TreeNode<T> {
    if (start > end) {
      return null;
    }

    const mid = start + ((end - start) >> 1);
    const node: TreeNode<T> = { val: arr[mid], left: null, right: null };

    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);

    return node;
  }

  return dfs(0, arr.length - 1);
};

export default sortedListToBST;
