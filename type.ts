export type ListNode<T> = {
  val: T;
  next: ListNode<T>;
} | null;

export type TreeNode<T> = {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
};
