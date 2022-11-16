## 二叉树的层序遍历(BFS)

### 思路

- 通过队列存储当前遍历的节点
- 队列长度为 `0` 结束遍历
- 每次遍历需要处理一层的节点为此我们需要执行以下步骤:
  - 获取当前队列长度, 这个长度代表当前层的节点数量(`levelLength`)
  - 循环获取`levelLength`个节点, 如果当前节点的左右子树不为空, 插入队列
  - 循环结束时将这层的节点存储在`row`数组中
- 将`row`数组插入到`result`数组, 继续循环

### 运行

```bash
deno run ./binary-tree-level-order-traversal/index.ts
```

### 测试

```bash
deno test ./binary-tree-level-order-traversal/index.ts
```
