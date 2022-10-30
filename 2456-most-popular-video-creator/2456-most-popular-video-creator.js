/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
    const ans = [];
    const map = {};
    let max = 0;
    
    for(let i = 0; i < ids.length; i++) {
        if(!map[creators[i]]) {
            map[creators[i]] = {
                vids: [],
                views: 0,
            };
        }
        map[creators[i]].views += views[i];
        map[creators[i]].vids.push([ids[i], views[i]]);
        max = Math.max(max, map[creators[i]].views);
    }
    
    for(let creator in map) {
        if(map[creator].views === max) {
            map[creator].vids.sort(compare);
            ans.push([creator, map[creator].vids[0][0]]);
        }
    }
    
    function compare(a, b) {
        if(a[1] > b[1]) {
            return -1;
        } else if(a[1] < b[1]) {
            return 1;
        } else {
            if(a[0] < b[0]) {
                return -1;
            } else {
                return 1;
            }
        }
    }
    
    return ans;
};