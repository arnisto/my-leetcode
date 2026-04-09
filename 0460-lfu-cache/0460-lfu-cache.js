/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.capacity = capacity;
    this.values = new Map(); // key -> value
    this.counts = new Map(); // key -> frequency
    this.lists = new Map();  // frequency -> Set(keys)
    this.minFreq = 0;
};

/** * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if (!this.values.has(key)) return -1;

    const value = this.values.get(key);
    this.updateFrequency(key);
    return value;
};

/** * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity <= 0) return;

    if (this.values.has(key)) {
        this.values.set(key, value);
        this.updateFrequency(key);
        return;
    }

    if (this.values.size >= this.capacity) {
        // Remove the Least Frequently Used (and Least Recently Used within that frequency)
        const evictList = this.lists.get(this.minFreq);
        const keyToEvict = evictList.values().next().value; // Get the first (oldest) item
        
        evictList.delete(keyToEvict);
        this.values.delete(keyToEvict);
        this.counts.delete(keyToEvict);
    }

    // Insert new item
    this.values.set(key, value);
    this.counts.set(key, 1);
    this.minFreq = 1;
    
    if (!this.lists.has(1)) this.lists.set(1, new Set());
    this.lists.get(1).add(key);
};

/**
 * Helper to manage frequency updates
 */
LFUCache.prototype.updateFrequency = function(key) {
    const freq = this.counts.get(key);
    this.counts.set(key, freq + 1);

    // Remove from current frequency list
    const currentList = this.lists.get(freq);
    currentList.delete(key);

    // If this was the minFreq and the list is now empty, increment minFreq
    if (freq === this.minFreq && currentList.size === 0) {
        this.minFreq++;
    }

    // Add to new frequency list
    if (!this.lists.has(freq + 1)) this.lists.set(freq + 1, new Set());
    this.lists.get(freq + 1).add(key);
};