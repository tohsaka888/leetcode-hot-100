import { assertEquals } from "asserts";
import { arrayToTree } from "../../utils/array-to-tree.ts";
import levelOrder from "../index.ts";

Deno.test("二叉树的层序遍历", () => {
  assertEquals(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])), [
    [3],
    [9, 20],
    [15, 7],
  ]);
});
