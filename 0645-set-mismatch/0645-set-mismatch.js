/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
   const counts = {};
    let duplicate, missing;

    // Count occurrences
    for (const num of nums) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Check numbers from 1 to n
    for (let i = 1; i <= nums.length; i++) {
        if (counts[i] === 2) duplicate = i;
        if (!counts[i]) missing = i;
    }

    return [duplicate, missing];
};