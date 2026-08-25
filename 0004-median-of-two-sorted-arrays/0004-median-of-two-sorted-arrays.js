/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length ===0 && nums2.length === 0) return 0
    const nums = [...nums1,...nums2].sort((a, b) => a - b);
    console.log(nums)
    const mid = Math.floor(nums.length/2);
    console.log(mid)
    if((nums.length-1) % 2 === 0){
        return nums[mid]
    }else{
        return (nums[mid-1] + nums[mid] ) / 2
    }
};