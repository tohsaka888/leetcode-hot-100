import { assertEquals } from "asserts";
import { arrayToList } from "/utils/array-to-list.ts";
import addTwoNumbers from "../index.ts";

Deno.test("两数相加", () => {
  assertEquals(addTwoNumbers(
    arrayToList([9, 9, 9, 9, 9, 9]),
    arrayToList([9, 9, 9])
  ), arrayToList([8, 9, 9, 0, 0, 0, 1]));
});
