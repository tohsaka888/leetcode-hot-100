import { Node } from "/type.ts";

function preorder<T = number>(root: Node<T> | null): T[] {
  if (root === null) {
    return [];
  }
  const res: T[] = [];
  const exploredTree: Node<T>[] = [];
  exploredTree.push(root);
  while (exploredTree.length) {
    const node = exploredTree.pop();
    res.push(node!.val);
    for (let i = 0; i < root.children.length; i++) {
      exploredTree.push(node!.children[i]);
    }
  }

  return res;
}
