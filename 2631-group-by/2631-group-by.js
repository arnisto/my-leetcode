Array.prototype.groupBy = function(fn) {
    const obj = {};
    
    for (let i = 0; i < this.length; i++) {
        const keyID = fn(this[i]);
        
        // If the key doesn't exist yet, create an empty array
        if (!obj[keyID]) {
            obj[keyID] = [];
        }
        
        // Push the element into the existing array (O(1) operation)
        obj[keyID].push(this[i]);
    }
    
    return obj;
};