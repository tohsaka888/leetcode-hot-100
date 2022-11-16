import sumOfLeftLeaves from "../index.ts";
import { assertEquals } from "asserts";
import { arrayToTree } from "../../utils/array-to-tree.ts";

Deno.test("左叶子之和", () => {
  assertEquals(
    sumOfLeftLeaves(arrayToTree<number>([3, 9, 20, null, null, 15, 7])),
    24
  );
  assertEquals(sumOfLeftLeaves(arrayToTree([1])), 0);
});
