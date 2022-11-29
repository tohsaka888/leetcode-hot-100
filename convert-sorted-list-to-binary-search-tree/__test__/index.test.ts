import sortedListToBST from "../index.ts";
import { assertEquals } from "asserts";
import { arrayToTree } from "array-to-tree";
import { arrayToList } from "array-to-list";

Deno.test("有序链表转换二叉搜索树", () => {
  assertEquals(
    sortedListToBST(arrayToList([-10, -3, 0, 5, 9])),
    arrayToTree([0, -10, 5, null, -3, null, 9])
  );
});
