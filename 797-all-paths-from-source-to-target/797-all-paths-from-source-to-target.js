/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph, result = [], comb = [0]) {
    const curNode = comb[comb.length - 1];
    
    if(curNode === graph.length - 1) {
        result.push(comb);
        return;
    }
    
    for(let i = 0; i < graph[curNode].length; i++) {
        const nextNode = graph[curNode][i];
        allPathsSourceTarget(graph, result, [...comb, nextNode]);
    }
    
    return result;
};