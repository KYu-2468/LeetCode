/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    if (head == null || head.next == null) return null;
    let slow = head;
    let fast = head;
    const hasCycle = head => {
        while( fast && fast.next ){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast) return true
        }
        return false;
    }
    
    let cyclePresent = hasCycle(head);
    if(!cyclePresent) return null; // no cycle return
     slow = head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
    
//     let currentNode = head;
    
//     while(currentNode) {
        
//         if(currentNode.visited) {
//             return currentNode;
//         } else {
//             currentNode.visited = true;
//         }
        
//         currentNode = currentNode.next;
//     }
    
//     return null;
    
//     let currentNode = head;
//     const map = new Map();
    
//     while(currentNode) {
        
//         if(map.get(currentNode)) {
//             return map.get(currentNode);
//         } else {
//             map.set(currentNode, currentNode);
//         }
        
//         currentNode = currentNode.next;
//     }
    
//     return null;
};