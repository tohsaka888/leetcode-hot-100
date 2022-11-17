import { assertEquals } from "asserts";
import sumNumbers from "../index.ts";
import { arrayToTree } from "/utils/array-to-tree.ts";

Deno.test("求根节点到叶节点数字之和", () => {
  assertEquals(sumNumbers(arrayToTree([1, 2, 3])), 25);
  assertEquals(sumNumbers(arrayToTree([4, 9, 0, 5, 1])), 1026);
});
