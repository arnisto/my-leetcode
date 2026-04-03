/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;      // Last element in nums1's original data
    let j = n - 1;      // Last element in nums2
    let k = m + n - 1;  // Last position in nums1 array

    // While there are elements in both arrays to compare
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are remaining elements in nums2, copy them.
    // (If nums1 has remaining elements, they are already in place.)
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};