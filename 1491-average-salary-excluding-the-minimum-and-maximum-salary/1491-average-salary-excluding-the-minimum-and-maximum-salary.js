/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const total = salary.reduce((total, cur) => total += cur, 0);
    const max = Math.max(...salary);
    const min = Math.min(...salary);
    const average = (total - max - min) / (salary.length - 2);
    return average.toFixed(5);
};