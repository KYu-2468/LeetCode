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
function lowestCommonAncestor(root, node1, node2) {
  let parent = root;
  
  while (isSameBranch(parent, node1, node2)) {
    if (node1.val < parent.val) {
      parent = parent.left;
    } else {
      parent = parent.right
    }
  }

  return parent;
}

function isSameBranch(parent, node1, node2) {
  if (parent.val === node1.val || parent.val === node2.val) return false;

  if (node1.val < parent.val && node2.val < parent.val) return true;
  if (node1.val > parent.val && node2.val > parent.val) return true;

  return false;
}