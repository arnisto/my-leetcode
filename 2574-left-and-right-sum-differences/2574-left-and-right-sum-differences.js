/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let total = nums.reduce((acc,ele)=> acc+ele,0);
    let prevSum = 0;
    let answer = [];
    for(let i = 0; i < nums.length; i++){
        answer[i] = Math.abs((prevSum) - (total-prevSum-nums[i]));
        prevSum += nums[i]
    }

    return answer
};