/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let curr = "";
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const duplicateIndex = curr.indexOf(char);
        
        if (duplicateIndex !== -1) {
            // Drop characters up to and including the repeated character
            curr = curr.slice(duplicateIndex + 1);
        }
        
        curr += char;
        maxLen = Math.max(maxLen, curr.length);
    }
    
    return maxLen;
};