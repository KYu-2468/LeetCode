/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;

  let cur = head, next, prev = null;
  
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};