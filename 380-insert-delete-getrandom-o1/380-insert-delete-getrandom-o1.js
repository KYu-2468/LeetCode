
var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] !== undefined) return false;
    
    this.arr.push(val);
    this.map[val] = this.arr.length - 1;
    
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map[val] === undefined) return false;
    
    this.arr[this.map[val]] = this.arr[this.arr.length - 1];
    const end = this.arr.pop();
    this.map[end] = this.map[val];
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