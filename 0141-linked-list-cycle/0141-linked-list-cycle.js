/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false;

  let fast = head.next, slow = head;
  
  while (fast !== null) {
    if (fast === slow) return true;
    fast = fast.next;
    if (fast && fast.next) fast = fast.next;
    slow = slow.next;
  }

  return false;
};