/**
 * @param {string[]} words
 * @return {number[]}
 */

class Trie {
  constructor(string) {
    this.root = {};
    this.populateTrie(string);
  }

  populateTrie(string) {
    // for(let i = 0; i < string.length; i++) {
      
      if(!this.root[string.charAt(0)]) {
        this.root[string.charAt(0)] = {count: 1};
      } else {
          this.root[string.charAt(0)].count++;
      }

      let currentObj = this.root[string.charAt(0)];
      
      for(let j = 1; j < string.length; j++) {
        if(!currentObj[string.charAt(j)]) {
          currentObj[string.charAt(j)] = {count: 1};
        } else {
            currentObj[string.charAt(j)].count++;
        }

        currentObj = currentObj[string.charAt(j)];
      }
    // }

    return this.root;
  }

  sum(string) {
    let curr = this.root;
    let count = 0;
      
    for(let i = 0; i < string.length; i++) {
        curr = curr[string.charAt(i)];
        count += curr.count;
    }
    
    return count;
  }
}


var sumPrefixScores = function(words) {
    const trie = new Trie(words[0]);
    const result = [];
    
    for(let i = 1; i < words.length; i++) {
        trie.populateTrie(words[i]);
    }
    // console.log(trie.root);
    for(let i = 0; i < words.length; i++) {
        let count = 0;
        count += trie.sum(words[i]);
        result.push(count);
    }
    
    return result;
};

