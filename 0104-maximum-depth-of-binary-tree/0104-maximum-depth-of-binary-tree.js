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
var maxDepth = function(root) {
    if(!root) return 0;
  let right = maxDepth(root.right);
  let left = maxDepth(root.left);
  return 1 + Math.max(right, left);
//     if (!root) return 0;
//     let max = 0;
    
//     const searchDepth = (node, depth) => {
//         max = Math.max(max, depth);
//         if (node.left) {
//             searchDepth(node.left, depth + 1);
//         }
        
//         if (node.right) {
//             searchDepth(node.right, depth + 1);
//         }
//     }
//     searchDepth(root, 1)
//     return max;
};