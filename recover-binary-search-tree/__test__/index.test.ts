import { assertEquals } from "asserts";
import { arrayToTree } from "/utils/array-to-tree.ts";
import recoverTree from "../index.ts";

Deno.test("恢复二叉搜索树", () => {
  assertEquals(
    recoverTree(arrayToTree([3, 1, 4, null, null, 2])),
    arrayToTree([2, 1, 4, null, null, 3])
  );
  assertEquals(
    recoverTree(arrayToTree([1, 3, null, null, 2])),
    arrayToTree([3, 1, null, null, 2])
  );
});
