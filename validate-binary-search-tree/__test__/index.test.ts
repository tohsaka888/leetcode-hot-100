import { assertEquals } from "asserts";
import isValidBST from "../index.ts";
import { arrayToTree } from "/utils/array-to-tree.ts";

Deno.test("验证二叉搜索树", () => {
  assertEquals(isValidBST(arrayToTree([2, 1, 3])), true);
  assertEquals(isValidBST(arrayToTree([5, 1, 4, null, null, 3, 6])), false);
  assertEquals(
    isValidBST(arrayToTree([32, 26, 47, 19, null, null, 56, null, 27])),
    false
  );
  assertEquals(
    isValidBST(arrayToTree([3, null, 30, 10, null, null, 15, null, 45])),
    false
  );
});
