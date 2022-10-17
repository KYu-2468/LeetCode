/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph, result = [], comb = [0]) {
    const res = [];


    function dfs(i, currArr) {
        if (i === graph.length-1) {
    res.push(currArr);
    return;
}

for (let path of graph[i]) {
        dfs(path, [...currArr, path])
}
}
    dfs(0, [0])
    return res;

};