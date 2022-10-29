import { Node } from "/type.ts";

/**
 * N叉树的最大深度
 * @date 2022-10-29
 * @param {any} root:Node<T>
 * @returns {any}
 */
function maxDepth<T>(root: Node<T>): number {
  const depths = [];
  function dfs(root: Node<T>, depth: number) {
    if (root) {
      const children = root.children;
      if (children.length) {
        root.children.forEach((item) => {
          dfs(item, depth + 1);
        });
      } else {
        depths.push(depth + 1);
      }
    }
  }
  return 0;
}
