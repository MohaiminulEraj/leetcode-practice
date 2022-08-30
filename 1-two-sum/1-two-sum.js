/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let matchMap = {};
    for(let i=0; i<nums.length; i++){
        let complement = target - nums[i];
        if(complement in matchMap){
            return [i, matchMap[complement]];
        }
        matchMap[nums[i]]=i;
    }
};