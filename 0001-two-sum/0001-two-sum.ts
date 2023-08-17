function twoSum(nums: number[], target: number): number[] {
    let matchMap = {};
    for(let i=0; i<nums.length; i++){
        let complement = target - nums[i];
        if(complement in matchMap){
            return [i, matchMap[complement]];
        }
        matchMap[nums[i]]=i;
    }
};