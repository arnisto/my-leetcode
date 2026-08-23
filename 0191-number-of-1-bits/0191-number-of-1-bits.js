/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let b = n.toString(2).split("").filter((ele)=> ele !== "0");
    return b.length || 0
};