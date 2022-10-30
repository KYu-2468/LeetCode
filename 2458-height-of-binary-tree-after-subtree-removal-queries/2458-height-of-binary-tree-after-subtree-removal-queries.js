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
 * @param {number[]} queries
 * @return {number[]}
 */

class Maxheap {
    constructor() {
        this.heap = [];
    }
    
    insert(height, nodeVal) {
        this.heap.push([height, nodeVal]);
        this.siftUp(this.heap.length - 1);
    }
    
    remove() {
        const popped = this.heap[0];
        const last = this.heap.pop();
        if(this.heap.length === 0) return;
        this.heap[0] = last;
        this.siftDown(0);
        return popped;
    }
    
    siftUp(index) {
        let parentIdx = this.getParent(index);
        while(parentIdx !== null) {
          if(this.heap[index][0] <= this.heap[parentIdx][0]) break;
          this.swap(index, parentIdx);
          index = parentIdx;
          parentIdx = this.getParent(index);
        }
    }
    
    siftDown(idx) {
        let leftIdx = this.getLeft(idx);
        let rightIdx = this.getRight(idx);

        while(leftIdx) {

          if(this.heap[leftIdx][0] <= this.heap[idx][0] && (!rightIdx || this.heap[rightIdx][0] <= this.heap[idx][0])) break;

          if(!rightIdx) {
            this.swap(idx, leftIdx);
            break;
          }

          if(this.heap[leftIdx][0] >= this.heap[rightIdx][0]) {
            this.swap(idx, leftIdx);
            idx = leftIdx;
          } else {
            this.swap(idx, rightIdx);
            idx = rightIdx;
          }

          leftIdx = this.getLeft(idx);
          rightIdx = this.getRight(idx);
        }
      }
    
    getParent(index) {
        if(index === 0) return null;
        const idx = Math.floor((index - 1) / 2);
        return idx;
    }
    
    getLeft(index) {
        const idx = 2 * index + 1;
        if(idx >= this.heap.length) return null;
        return idx;
    }
    
    getRight(index) {
        const idx = 2 * index + 2;
        if(idx >= this.heap.length) return null;
        return idx;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    peek() {
        return this.heap[0];
    }
}

var treeQueries = function(root, queries) {
    const nodes = {};
    const maxHeaps = new Array(10 ** 5);
    const result = [];
    
    for(let i = 0; i < maxHeaps.length; i++) {
        maxHeaps[i] = new Maxheap();
    }
    
    const getDepth = (node, level) => {
        let max;
        if(!node) return -1;
        
        if(!node.left && !node.right) {
            nodes[node.val] = level;
            maxHeaps[level].insert(0, node.val);
            return 0;
        }
        
        const leftDepth = 1 + getDepth(node.left, level + 1);
        const rightDepth = 1 + getDepth(node.right, level + 1);
        max = Math.max(leftDepth, rightDepth); // dangerous
        
        nodes[node.val] = level;
        maxHeaps[level].insert(max, node.val);
        
        return Math.max(leftDepth, rightDepth);
    }
    
    getDepth(root, 0);
    
    for(let q of queries) {
        const level = nodes[q];
        const rt = maxHeaps[level].peek();
        let removed = false;
        // console.log(q, maxHeaps[level])
        if(rt[1] === q) {
            removed = true;
            maxHeaps[level].remove();
        }
        
        const newRT = maxHeaps[level].peek();
        
        // console.log(q, newRT)
        if(removed) maxHeaps[level].insert(...rt);
        if(!newRT) result.push(level - 1);
        else result.push(level + newRT[0]);
    }
    
    return result;
    
};