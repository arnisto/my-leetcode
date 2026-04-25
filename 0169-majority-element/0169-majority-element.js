/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let occ = {};
    const maj = nums.length / 2;
    for(let i = 0 ; i < nums.length ; i++){
        let oldValue = occ?.[nums[i]] || 0 ;
        
        const newOcc = oldValue + 1;

        occ[nums[i]] = newOcc

        if(newOcc >= maj){
            return nums[i]
        }
    }
};