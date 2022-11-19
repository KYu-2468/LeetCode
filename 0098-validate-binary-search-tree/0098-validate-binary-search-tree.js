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
 * @return {boolean}
 */
var isValidBST = function(root, upperLimit = Infinity, lowerLimit = -Infinity) {
    if (!root) return true;
    if (root.val <= lowerLimit || root.val >= upperLimit) return false;
    return isValidBST(root.left, root.val, lowerLimit) && isValidBST(root.right, upperLimit, root.val);
};