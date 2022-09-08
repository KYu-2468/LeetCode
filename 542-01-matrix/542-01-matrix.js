/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

class QueueObj {
    constructor() {
        this.data = {};
        this.head = 0;
        this.tail = 0;
        this.length = 0;
    }
    
    push(val) {
        this.data[this.tail] = val;
        this.tail++;
        this.length++;
    }
    
    shift() {
        delete this.data[this.head];
        this.head++;
        this.length--;
    }
    
    getHead() {
        return this.data[this.head];
    }
}

var updateMatrix = function(mat) {
    const queue = [];
    let head = 0;
    
    for(let r = 0; r < mat.length; r++) {
        for(let c = 0; c < mat[0].length; c++) {
            
            if(mat[r][c] === 1) {
                mat[r][c] = Infinity;
            } else {
                queue.push([r, c]);
            }
        }
    }
    
    const checkNeighbor = (r, c, val) => {
        if(r >= 0 && r < mat.length && c >= 0 && c < mat[0].length) {
            if(mat[r][c] > val) {
                mat[r][c] = val;
                queue.push([r, c])
            }
            
        }
    }
    
    while(head < queue.length) {
        const [r, c] = queue[head];
        
        checkNeighbor(r + 1, c, mat[r][c] + 1);
        checkNeighbor(r - 1, c, mat[r][c] + 1);
        checkNeighbor(r, c + 1, mat[r][c] + 1);
        checkNeighbor(r, c - 1, mat[r][c] + 1);
        
        head++;
    }
   
    return mat;
};