# [恢复二叉搜索树](https://leetcode.cn/problems/recover-binary-search-tree/)

## 思路

根据二叉搜索树的性质: 中序遍历所得为递增序列

我们使用中序遍历遍历这颗二叉搜索树, 如果出现不满足二叉搜索树的情况(即当前节点的值小于或者等于上一次输出的节点`pre`的值), 那么我们记录下这两个节点(`node`和`pre`)

当中序遍历完成, 我们交换这两个节点的字面值(不更改引用), 得到的就是修复的二叉搜索树

## 运行

```bash
deno test recover-binary-search-tree
```
