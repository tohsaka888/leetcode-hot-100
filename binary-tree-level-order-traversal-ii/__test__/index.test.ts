import levelOrderBottom from "../index.ts";
import { arrayToTree } from "../../utils/array-to-tree.ts";
import { assertEquals } from "asserts";

Deno.test("二叉树的层序遍历II", () => {
  assertEquals(levelOrderBottom(arrayToTree([3, 9, 20, null, null, 15, 7])), [
    [15, 7],
    [9, 20],
    [3],
  ]);
  assertEquals(levelOrderBottom(arrayToTree([1])), [[1]]);
  assertEquals(levelOrderBottom(arrayToTree([])), []);
});
