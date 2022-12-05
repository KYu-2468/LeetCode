/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const res = [];
    dfs(0, [0])
    
    return res;
    
    function dfs(index, comb) {
        if (index === graph.length - 1) return res.push(comb);
        
        for (const neighbor of graph[index]) {
            dfs(neighbor, [...comb, neighbor]);
        }
    }
};