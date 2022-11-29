# [将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)

## 思路

因为给定数组是**严格递增**的, 所以我们只需要找到数组中间元素(`arr[mid]`)作为二叉树的根节点

之后以中间元素为分割, 左侧的构建为左子树, 右侧的构建为右子树

构建方式相同, 去中间元素作为根节点, 左侧的构建为左子树, 右侧的构建为右子树, 这样我们就可以进行递归处理

## 测试

```bash
deno test ./convert-sorted-array-to-binary-search-tree/
```
