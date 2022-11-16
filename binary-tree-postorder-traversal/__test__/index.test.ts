import postorderTraversal from "../index.ts";
import { assertEquals } from "asserts";
import { arrayToTree } from "../../utils/array-to-tree.ts";

Deno.test("二叉树的后序遍历", () => {
  assertEquals(postorderTraversal(arrayToTree([1, null, 2, 3])), [3, 2, 1]);
  assertEquals(postorderTraversal(arrayToTree([])), []);
  assertEquals(postorderTraversal(arrayToTree([1])), [1]);
});
