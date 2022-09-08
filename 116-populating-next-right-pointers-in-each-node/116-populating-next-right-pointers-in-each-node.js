/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return root;
    }
    
    const queue = [root];
    let headQueue = 0;
    
    while(headQueue < queue.length) {
        if(queue[headQueue].left) {
            queue.push(queue[headQueue].left);
            queue.push(queue[headQueue].right);
        }
        queue[headQueue].next = queue[headQueue + 1];
        headQueue++;
    }
    
    let mostRightNode = root;
    while(mostRightNode) {
        mostRightNode.next = null;
        mostRightNode = mostRightNode.right;
    }
    
    
    return root;
};

class LinkList {
    
    constructor(node) {
        this.head = new ListNode(node);
        this.tail = this.head;
    }
    
    add(node) {
        this.tail.next = new ListNode(node);
        this.tail = this.tail.next;
    }
    
    remove() {
        this.head = this.head.next;
    }
}

class ListNode {
    constructor(node) {
        this.node = node;
        this.next = null;
    }
}