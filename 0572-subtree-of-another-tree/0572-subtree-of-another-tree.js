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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subroot) {
    if (!subroot) return true;
    if (!root) return false;
    if (root.val === subroot.val && comparison(root, subroot)) return true;
    
    return isSubtree(root.left, subroot) || isSubtree(root.right, subroot);
};

function comparison(p,q) {
  if (p == null && q == null) return true;
  if (p == null || q == null || q.val !== p.val) return false;
  
  return comparison(p.left, q.left) && comparison(p.right, q.right);
}