/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/** * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;

    // Refresh the key: delete and re-insert to move to the end (most recent)
    const val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    
    return val;
};

/** * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
        // The first key in the Map is the least recently used
        // next().value returns the first key in the entries iterator
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
    }
};