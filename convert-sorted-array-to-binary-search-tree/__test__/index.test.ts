import sortedArrayToBST from "../index.ts";
import { arrayToTree } from "/utils/array-to-tree.ts";
import { assertEquals } from "asserts";

Deno.test("将有序数组转换为二叉搜索树", () => {
  assertEquals(
    sortedArrayToBST([-10, -3, 0, 5, 9]),
    arrayToTree([0, -10, 5, null, -3, null, 9])
  );
});
