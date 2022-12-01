/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity;
    
    function traverse(node) {
        if (!node) return 0;
        let left = Math.max(traverse(node.left), 0);
        let right = Math.max(traverse(node.right), 0);
        max = Math.max(max, node.val + left + right);
        return Math.max(left + node.val, right + node.val);
    }
    traverse(root);
    
    return max;
};