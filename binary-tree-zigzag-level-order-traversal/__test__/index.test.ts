import { assertEquals } from "asserts";
import { arrayToTree } from "array-to-tree";
import zigzagLevelOrder from "../index.ts";

Deno.test("二叉树的锯齿层序遍历", () => {
  assertEquals(zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])), [
    [3],
    [20, 9],
    [15, 7],
  ]);
});
