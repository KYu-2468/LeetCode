/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const output = [];
    const visited = new Array(board.length);
    const trie = new Trie();
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    for(let i = 0; i < visited.length; i++) {
        visited[i] = new Array(board[0].length).fill(0);
    }
    
    for(let word of words) {
        trie.insert(word);
    }
    
    const backtrack = (row, col, trieNode) => {
        if(row < 0 || row >= board.length || col < 0 || col >= board[row].length || visited[row][col]) return;
        if(!trieNode[board[row][col]]) return;
        if(trieNode[board[row][col]].word) {
            output.push(trieNode[board[row][col]].word);
            delete trieNode[board[row][col]].word;
            if(Object.keys(trieNode[board[row][col]]).length === 0) {
                delete trieNode[board[row][col]]
            }
        }
        trieNode = trieNode[board[row][col]];
        visited[row][col] = 1;
        for(const dir of directions) {
            backtrack(row + dir[0], col + dir[1], trieNode);
        }
        visited[row][col] = 0;
    }
    
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[row].length; col++) {
            backtrack(row, col, trie.root);
        }
    }
    
    return output;
};

class Trie {
    constructor() {
        this.root = {};
    }
    
    insert(word) {
        let curLevel = this.root;
        
        for(let char of word) {
            if(!curLevel[char]) {
                curLevel[char] = {count: 0};
            }
            curLevel[char].count++;
            curLevel = curLevel[char];
        }
        
        curLevel.word = word;
    }
    
    contains(word) {
        let curLevel = this.root;
        
        for(let char of word) {
            if(!curLevel[char]) {
                return false;
            }
            
            curLevel = curLevel[char];
        }
        
        for(let char of word) {
            curLevel.count--;
            curLevel = curLevel[char];
        }
        const words = curLevel.words;
        delete curLevel.words;
        return words;
    }
}