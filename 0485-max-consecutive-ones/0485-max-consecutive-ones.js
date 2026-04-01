/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0 ;
    let currentLen = 0;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] === 1){
            currentLen++;
            if(currentLen > res){
                res = currentLen
            }
        }else{
            currentLen = 0;
        }
    }
    return res; 
    
};