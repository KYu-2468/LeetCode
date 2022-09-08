/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head.next) {
        return null;
    }
    
    let p1 = head;
    let p2 = head;
    
    while(n) {
        n--;
        p2 = p2.next;
    }
    
    if(!p2) {
        return p1.next;
    }
    
    while(p2.next) {
        p2 = p2.next;
        p1 = p1.next;
    }
    
    p1.next = p1.next.next;
    
    return head;
};