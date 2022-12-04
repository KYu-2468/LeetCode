/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    let curNode = head;
    
    while (curNode) {
        if (curNode.child) {
            if (curNode.next) {
                let child = curNode.child;
                
                while (child.next) {
                    child = child.next;
                }
                
                curNode.next.prev = child;
                child.next = curNode.next;
            }
            
            curNode.next = curNode.child;
            curNode.child.prev = curNode;
        }
        curNode.child = null;
        curNode = curNode.next;
    }
    
    return head;
//     const arr = [];
//     traverse(head);
    
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].prev = arr[i - 1] || null;
//         arr[i].next = arr[i + 1] || null;
//         arr[i].child = null;
//     }
    
//     return head;
    
//     function traverse(node) {
//         while (node) {
//             arr.push(node);
//             if (node.child) traverse(node.child);
//             node = node.next;
//         }
//     }
    
    
    // [1, 2, 5, 6, 8, 7, 3, 4, 9]
    //  1 2 3 4 9
    //    |
    //    5 6 7
    //      |
    //      8
    
};