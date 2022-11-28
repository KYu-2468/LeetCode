/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const winners = new Set();
    const lostOne = new Set();
    const losers = new Set();
    
    for (let match of matches) {
        const [winner, loser] = match;
        if (!losers.has(winner) && !lostOne.has(winner)) {
            winners.add(winner);
        }
        winners.delete(loser);
        if (losers.has(loser)) continue;
        
        if (lostOne.has(loser)) {
            lostOne.delete(loser);
            losers.add(loser);
            continue;
        }
        lostOne.add(loser);
    }
    return [Array.from(winners).sort((a, b) => a - b), Array.from(lostOne).sort((a, b) => a - b)];
};