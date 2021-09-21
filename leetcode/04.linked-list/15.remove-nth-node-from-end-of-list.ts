// 19: https://coding.imooc.com/lesson/82.html#mid=2740

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let dummyHead: ListNode | null = new ListNode(0);

  dummyHead.next = head;

  let p: ListNode | null = dummyHead;
  let q: ListNode | null = dummyHead;

  for (let i = 0; i < n + 1; i++) {
    if (q) {
      q = q.next;
    }
  }

  while (q !== null) {
    p = p!.next;
    q = q.next;
  }

  let delNode = p!.next;
  p!.next = delNode!.next;
  delNode = null;

  let returnNode = dummyHead.next;
  dummyHead = null;
  return returnNode;
}
