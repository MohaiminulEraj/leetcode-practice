/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashset = {};
    for(let i=0; i<nums.length; i++){
        if(nums[i] in hashset){
            return true;
        }
        hashset[nums[i]] = nums[i]
    }
    return false;
};