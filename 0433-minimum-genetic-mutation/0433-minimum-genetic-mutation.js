/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let min = Number.MAX_VALUE;
    
    const dfs = (str = "", mutations = 0, visited = {}) => {
        // console.log(str, mutations, visited)
        if(str === end) {
            return min = Math.min(min, mutations);
        }
        
        for(let word of bank) {
            if(!visited[word] && isValid(str, word)) {
                dfs(word, mutations + 1, {...visited, [word]: true})
            }
        }
    }
    
    function isValid(str, word) {
        let numOfMutations = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i] !== word[i]) numOfMutations++;
        }
        
        return numOfMutations <= 1 ? true : false;
    }
    
    dfs(start, 0, {});
    
    return min > 10 ? -1 : min;
};