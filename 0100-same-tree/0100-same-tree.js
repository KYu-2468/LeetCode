/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p == null && q == null) return true;
  function helperFxn(p, q) {
    if (p == null && q == null) return true;
    if ((p == null && q !== null) || (p !== null && q == null)) return false;
    if (q.val !== p.val) return false;
    
    return helperFxn(p.left, q.left) && helperFxn(p.right, q.right);
  }
  return helperFxn(p, q)
};