import { ListNode } from "../type.ts";

const arrayToList = <T>(arr: T[]) => {
  if (arr.length === 0) {
    return null;
  }

  const res: ListNode<T> = { val: arr[0], next: null };
  let head: ListNode<T> = res;

  for (let index = 1; index < arr.length; index++) {
    const item = arr[index];
    head!.next = { val: item, next: null };
    head = head!.next;
  }

  return res;
};

export { arrayToList };
