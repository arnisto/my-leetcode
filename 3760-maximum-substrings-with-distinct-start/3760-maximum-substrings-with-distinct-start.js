/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    const _set = new Set(s.split(""));
    return _set.size
};