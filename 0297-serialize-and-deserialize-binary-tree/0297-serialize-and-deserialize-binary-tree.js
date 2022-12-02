/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = [];
    function traverse(node) {
        if (!node) return res.push("");
        res.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data.length === 0) return null;
    
    data = data.split(",");
    let idx = 0;
    
    function traverse() {
        if (data[idx] == "") return null;
        
        const node = new TreeNode(data[idx]);
        node.left = traverse(++idx);
        node.right = traverse(++idx);
        return node;
    }
    
    return traverse()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */