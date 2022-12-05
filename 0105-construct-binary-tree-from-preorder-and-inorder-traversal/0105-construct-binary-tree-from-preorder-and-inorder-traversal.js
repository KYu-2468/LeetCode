/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let root = preorder[0]
  let mid = inorder.indexOf(root)

  const tree = new TreeNode(root)
  
  if (preorder.length == 0) return null
  if (preorder.length == 1) return tree

  tree.left = buildTree(preorder.slice(1,1+mid), inorder.slice(0, mid))
  tree.right = buildTree(preorder.slice(1+mid), inorder.slice(1+mid))

  return tree
};