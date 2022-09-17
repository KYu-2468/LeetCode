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
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    const root = new TreeNode(preorder[0]);
    const infinite = new TreeNode(Infinity);
    const stack = [infinite, root];
    
    for(let i = 1; i < preorder.length; i++) {
        const newNode = new TreeNode(preorder[i]);
        if(preorder[i] < stack[stack.length - 1].val) {
            stack[stack.length - 1].left = newNode;
            stack.push(newNode);
        } else {
            while(newNode.val > stack[stack.length - 2].val) {
                stack.pop();
            }
            
            stack[stack.length - 1].right = newNode;
            stack.pop();
            stack.push(newNode)
        }
        
    }
    
    return root;
};