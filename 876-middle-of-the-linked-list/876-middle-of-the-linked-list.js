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
var middleNode = function(head) {
    let currentNode = head;
    let numOfNodes = 0;
    
    while(currentNode) {
        numOfNodes++;
        currentNode = currentNode.next;
    }
    
    const mid = Math.floor(numOfNodes / 2) + 1;
    currentNode = head;
    
    for(let i = 1; i < mid; i++) {
        currentNode = currentNode.next;
    }
    
    return currentNode;
};