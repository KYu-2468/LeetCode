/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// class TreeNode {
//     constructor(val, left, right) {
//         this.val = (val===undefined ? 0 : val);
//         this.left = (left===undefined ? null : left);
//         this.right = (right===undefined ? null : right);
//     }
// }

var sortedArrayToBST = function(nums) {
    
    if(nums.length === 0) return null;
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};

const recurWithSlice = (nums) => {
    const start = performance.now();
    sortedArrayToBST(nums);
    console.log(performance.now() - start);
}

// var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
//     if(start > end) return null;
    
//     const mid = Math.floor((start + end) / 2);
//     const root = new TreeNode(nums[mid]);
    
//     if(start === end) return root;
    
//     root.left = sortedArrayToBST(nums, start, mid - 1);
//     root.right = sortedArrayToBST(nums, mid + 1, end);
    
//     return root;
// };

const recurWithPointer = (nums) => {
    const start = performance.now();
    sortedArrayToBST_1(nums);
    console.log(performance.now() - start);
}

const generateArr = (num) => {
    const arr = [];
    for(let i = -num; i <= num; i++) {
        arr.push(i);
    }
    
    return arr;
}