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
    let cur = head;
    let next = head ? head.next : null;
    let prev = null;
    while(cur) {
        cur.next = prev
        prev = cur
        cur = next;
        next = cur ? cur.next : null;
    }
    return prev;
};