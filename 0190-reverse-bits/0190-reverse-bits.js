/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    // 1. Convert to binary string and pad leading zeros to length 32
    let binaryStr = n.toString(2).padStart(32, '0');
    
    // 2. Reverse the string
    let reversedStr = binaryStr.split('').reverse().join('');
    
    // 3. Parse back to integer from base 2
    return parseInt(reversedStr, 2);
};