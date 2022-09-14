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
    let current = head;
    const nextStack = [];
    
    while((current && current.next) || nextStack.length || (current && current.child)) {
        if(current.child) {
            !current.next || nextStack.push(current.next);
            current.next = current.child;
            current.child.prev = current;
            current.child = null;
        } else if(current.next){
            current = current.next;
        } else {
            current.next = nextStack.pop();
            current.next.prev = current;
        }
    }
    
    return head;
};