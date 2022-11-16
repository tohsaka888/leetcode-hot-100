import inorderTraversal from "../index.ts";
import { assertEquals } from "asserts";
import { arrayToTree } from "/utils/array-to-tree.ts";

Deno.test("二叉树的中序遍历", () => {
  assertEquals(inorderTraversal(arrayToTree([1, null, 2, 3])), [1, 3, 2]);
});
