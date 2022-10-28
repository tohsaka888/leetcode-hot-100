import { Node } from "/type.ts";

/**
 * N叉树的后序遍历
 * @date 2022-10-28
 * @param {any} root:Node<T>
 * @returns {any}
 */
function postorder<T = number>(root: Node<T>): T[] {
  const res: T[] = [];
  function traverse(root: Node<T>) {
    if (root) {
      root.children.forEach((child) => {
        traverse(child);
      });
      res.push(root.val);
    } else {
      return;
    }
  }
  traverse(root);
  return res;
}
