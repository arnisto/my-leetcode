/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let position = 0;
    let occ = new Set([]);
    for(let i = 0 ; i < nums.length ; i++){
       if(!occ.has(nums[i])){
           occ.add(nums[i]);
           nums[position] = nums[i];
           position = position + 1;
       }
    }

    return position
};