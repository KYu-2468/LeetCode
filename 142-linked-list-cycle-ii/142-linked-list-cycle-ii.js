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
    let currentNode = head;
    
    while(currentNode) {
        
        if(currentNode.visited) {
            return currentNode;
        } else {
            currentNode.visited = true;
        }
        
        currentNode = currentNode.next;
    }
    
    return null;
    
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