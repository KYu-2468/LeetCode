/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let curNode = root;
    
    while(curNode) {
        if (p.val > curNode.val && q.val > curNode.val) {
            curNode = curNode.right;
        } else if (p.val < curNode.val && q.val < curNode.val) {
            curNode = curNode.left;
        } else {
            return curNode;
        }
    }
    
//     let curNode = root;
    
//     while(curNode) {
//         if(curNode.val === p.val || curNode.val === q.val) {
//             return curNode;
//         } else if (p.val > curNode.val && q.val > curNode.val) {
//             curNode = curNode.right;
//         } else if (p.val < curNode.val && q.val < curNode.val) {
//             curNode = curNode.left;
//         } else {
//             return curNode;
//         }
//     }
    
    
    // if(root.val === p.val || root.val === q.val) {
    //     return root;
    // } else if (p.val > root.val && q.val > root.val) {
    //     return lowestCommonAncestor(root.right, p, q);
    // } else if (p.val < root.val && q.val < root.val) {
    //     return lowestCommonAncestor(root.left, p, q);
    // } else {
    //     return root;
    // }
};