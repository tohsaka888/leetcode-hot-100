## [二叉树的锯齿形层序遍历](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/)

### 思路

基本和[二叉树的层序遍历](/binary-tree-level-order-traversal/README.md)一致。

区别在于由于是锯齿形遍历, 所以我们需要知道当前的遍历方向, 比如:

- 遍历根节点`root`时, 方向为从左到右(标志为`left`), 那么下一层方向一定为从右到左(标志为`right`)
- 根据当前层的遍历方向, 我们插入当前节点值的方式也需要改变
  - 如果为从左往右`left`, 我们应该正常插入至当前层节点数组`row`数组尾部
  - 如果为从右往左`right`, 我们应该插入至当前层节点数组组`row`数组头部

### 运行

```typescript
deno run ./binary-tree-zigzag-level-order-traversal/index.ts
```

### 测试

```typescript
deno test ./binary-tree-zigzag-level-order-traversal/index.ts
```
