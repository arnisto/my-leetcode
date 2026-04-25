/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // If the array has 2 or fewer elements, they are already valid
    if (nums.length <= 2) return nums.length;

    // k represents the index where the next valid element should be placed.
    // We start at 2 because the first two elements are always allowed.
    let k = 2;

    for (let i = 2; i < nums.length; i++) {
        // Compare the current element with the element two positions behind 
        // the current write-pointer (k). 
        // Since the array is sorted, if nums[i] is different from nums[k-2], 
        // it means we haven't reached three of a kind yet.
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};