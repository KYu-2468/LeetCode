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
    let queueHead = 0;
    
    for(let i = 0; i < mat.length; i++) {
        
        for(let j = 0; j < mat[0].length; j++) {
            
            if(mat[i][j] === 0) {
                
                queue.push([i, j]);
                
            } else {
                
                mat[i][j] = Number.MAX_VALUE;   
            }
            
        }
    }
    
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while(queueHead < queue.length) {
        
        const [row, col] = queue[queueHead];
        
        dir.forEach(dir => {
            const [r, c] = dir;
            
            if(row + r >= 0 && row + r < mat.length && col + c >= 0 && col + c < mat[0].length) {
                
                if(mat[row][col] + 1 < mat[row + r][ col + c]) {
                    mat[row + r][col + c] = mat[row][col] + 1;
                    queue.push([row + r, col + c]);
                }
                
            }
        })
        
        queueHead++;
    }
    
    return mat;
    
//     const findClosest = (row, col) => {
//         const queue = [[row, col, 0]];
//         let head = 0;
        
        
//         while(head < queue.length) {
//             const [r, c, distance] = queue[head];
            
//             if(r >= 0 && r < mat.length && c >= 0 && c < mat[0].length) {
                
//                 if(mat[r][c] !== 0) {
//                     queue.push([r + 1, c, distance + 1]);
//                     queue.push([r - 1, c, distance + 1]);
//                     queue.push([r, c + 1, distance + 1]);
//                     queue.push([r, c - 1, distance + 1]);
//                 } else {
//                     return distance;
//                 }
//             }
            
//             head++;
//         }
//     }
        
//     const queue = [];
//     let head = 0;
    
//     for(let r = 0; r < mat.length; r++) {
//         for(let c = 0; c < mat[0].length; c++) {
            
//             if(mat[r][c] === 1) {
//                 mat[r][c] = Infinity;
//                 queue.push([r, c]);
//             }
//         }
//     }
    
//     while(head < queue.length) {
//         const [r, c] = queue[head];
//         mat[r][c] = findClosest(r, c);
//         head++;
//     }
   
//     return mat;
};