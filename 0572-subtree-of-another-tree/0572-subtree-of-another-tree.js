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
var isSubtree = function(r, subroot) {
    
    const traverse = (r) => {
    let isValid;
    if (r.val === subroot.val) {
      isValid = comparison(r, subroot);
      if (isValid) return true;
    }
    let isLeftValid = false, isRightValid = false;
    if (r.left) isLeftValid = traverse(r.left);
    if (r.right) isRightValid = traverse(r.right);
    return isLeftValid || isRightValid;
  }

  return traverse(r);
};

function comparison(p,q) {
  if (p == null && q == null) return true;
  if (p == null || q == null || q.val !== p.val) return false;
  
  return comparison(p.left, q.left) && comparison(p.right, q.right);
}