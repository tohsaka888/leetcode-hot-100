## 二叉树展开为链表

### 思路

- 如果当前根节点不为空
  - 当前根节点的左子树如果存在, 找到当前节点的左子树的最右侧节点(pre), 并将当前节点的右子树接到`pre`的右子树(`pre->right = root -> right`)
  - 当前节点的左子树不存在, 遍历当前节点的右子树(不做更改, 直接遍历)
- 当前节点为空, 退出递归

![img](https://pic.leetcode-cn.com/1652689701-Llfegx-%E5%9B%BE%E7%89%87.png)

### 运行

```bash
deno run ./flatten-binary-tree-to-linked-list/index.ts
```
