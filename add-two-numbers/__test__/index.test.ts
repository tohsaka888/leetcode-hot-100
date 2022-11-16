import { assertEquals } from "https://deno.land/std@0.164.0/testing/asserts.ts";
import { arrayToList } from "/utils/array-to-list.ts";
import addTwoNumbers from "../index.ts";

Deno.test("两数之和", () => {
  assertEquals(addTwoNumbers(
    arrayToList([9, 9, 9, 9, 9, 9]),
    arrayToList([9, 9, 9])
  ), arrayToList([8, 9, 9, 0, 0, 0, 1]));
});
