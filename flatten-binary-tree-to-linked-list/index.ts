import { TreeNode } from "../type.ts";
import { arrayToTree } from "../utils/array-to-tree.ts";

function flatten<T>(root: TreeNode<T>) {
  function traverse(root: TreeNode<T>) {
    // 如果当前节点为空结束
    if (root) {
      // 找到左子树(如果存在)
      let leftTree = root.left;
      let pre = leftTree;
      // 如果左子树存在
      if (leftTree) {
        // 找到左子树的最右侧节点
        while (leftTree) {
          pre = leftTree;
          leftTree = leftTree.right;
        }
        // pre为左子树的最右侧节点
        // 左子树的最右侧节点增加一颗右子树, 这颗右子树为根节点的右子树
        pre!.right = root.right;
        // 将根节点的左子树接到根节点的右子树
        root.right = root.left;
        // 清空左子树
        root.left = null;
      }
      // 遍历右子树
      traverse(root.right);
    }
  }
  traverse(root);
}

const root = arrayToTree([1, 2, 5, 3, 4, null, 6]);
flatten(root);
console.log(JSON.stringify(root, null, 2));
