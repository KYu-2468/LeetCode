
var StockSpanner = function() {
    this.array = [];
    this.max = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    // console.log('pre: ', this.array, this.max, price)
    if(this.array.length === 0 || price < this.array[this.array.length - 1]) {
        this.array.push(price);
        this.max.push(this.array.length - 1);
        return 1;
    }
    
    if(price >= this.array[this.max[0]]) {
        this.array.push(price);
        this.max = [this.array.length - 1];
        return this.array.length;
    }
    
    let left = 0, right = this.max.length - 1, mid = 0;
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if(left === right) {
            break;
        }
        else if(price >= this.array[this.max[mid]]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    // console.log('mid: ', mid)
    this.array.push(price);
    for(let i = this.max.length - 1; i >= mid; i--) {
        this.max.pop();
    }
    // console.log('cur: ', this.array, this.max, mid, price)
    this.max.push(this.array.length - 1);
    
    // console.log('post: ', this.array, this.max, mid, price)
    const count = this.array.length - ((this.max[mid - 1] || 0) + 1);
    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */