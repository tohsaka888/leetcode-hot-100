import { arrayToList } from "../utils/array-to-list.ts";
import { ListNode } from "../type.ts";

const addTwoNumbers = (
  l1: ListNode<number>,
  l2: ListNode<number>
): ListNode<number> => {
  let carry = 0;
  const resultList: ListNode<number> = { val: null!, next: null };
  let current = resultList;

  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;
    let sum = carry + l1Val + l2Val;

    carry = sum > 9 ? 1 : 0;
    sum = sum % 10;
    current.next = { val: sum, next: null };

    current = current.next;

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  // 遍历完成之后还有进位
  if (carry) {
    current.next = { val: carry, next: null };
  }

  return resultList.next;
};

const result = addTwoNumbers(
  arrayToList([9, 9, 9, 9, 9, 9]),
  arrayToList([9, 9, 9])
);

console.log(result);
