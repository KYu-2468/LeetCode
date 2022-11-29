
var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (val in this.map) return false;
    
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.map)) return false;
    const valIndex = this.map[val];
    [this.arr[valIndex], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[valIndex]]
    this.arr.pop();
    this.map[this.arr[valIndex]] = valIndex;
    delete this.map[val];
    
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */