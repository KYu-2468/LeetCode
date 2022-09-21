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
    
    if(root.val <= lowerLimit || root.val >= upperLimit) return false;
    
    let isLeftValid = true;
    let isRightValid = true;
    
    if(root.left) {
        isLeftValid = isValidBST(root.left, root.val, lowerLimit);
    }
    
    
    if(root.right) {
        isRightValid = isValidBST(root.right, upperLimit, root.val);
    }
    
    return isLeftValid && isRightValid;
};