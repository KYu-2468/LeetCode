/**
 * @param {string[]} creators
 * @param {string[]} ids
 * @param {number[]} views
 * @return {string[][]}
 */
var mostPopularCreator = function(creators, ids, views) {
    const ans = [];
    const mostPopular = {};
    let max = 0;
    
    for(let i = 0; i < ids.length; i++) {
        const name = creators[i], id = ids[i], view = views[i];
        
        if(!mostPopular[name]) {
            mostPopular[name] = {id, view, total: 0};
        }
        
        let creator = mostPopular[name];
        creator.total += view;
        max = Math.max(max, creator.total);
        
        if(view > creator.view) {
            creator.view = view;
            creator.id = id;
        } else if(view === creator.view) {
            creator.id = creator.id < id ? creator.id : id;
        }
    }
    
    for(let name in mostPopular) {
        const creator = mostPopular[name];
        
        if(creator.total === max) {
            ans.push([name, creator.id])
        }
    }
    
    return ans;
};