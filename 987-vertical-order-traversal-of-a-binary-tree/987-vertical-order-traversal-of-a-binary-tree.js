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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    const map = {};
    const result = [];
    
    traverseTree(root, 0, 0, map);
    const sortedCols = Object.keys(map).sort((a, b) => a - b);
    
    for(let col of sortedCols) {
        const colArr = [];
        const sortedRows = Object.keys(map[col]).sort((a, b) => a - b);
        
        for(let row of sortedRows) {
            colArr.push(...map[col][row].sort((a, b) => a - b));
        }
        
        result.push(colArr);
    }
    
    return result;
};

const traverseTree = (root, row, col, map) => {
    if(!root) return;
    
    if(!map[col]) {
        map[col] = {};
    }
    
    if(!map[col][row]) {
        map[col][row] = [];
    }
    
    map[col][row].push(root.val);
    
    traverseTree(root.left, row + 1, col - 1, map);
    traverseTree(root.right, row + 1, col + 1, map);
}