import { assertEquals } from "asserts";
import singleNumber from "../index.ts";

Deno.test("只出现一次的数字", () => {
  assertEquals(singleNumber([2, 2, 1]), 1);
  assertEquals(singleNumber([4, 1, 2, 1, 2]), 4);
  assertEquals(singleNumber([1]), 1);
});
