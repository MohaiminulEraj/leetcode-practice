function longestConsecutive(nums: number[]): number {
    nums.sort((a,b) => a-b)
    let count = 1;
    let maxCount = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1] + 1){
            count++;
        } else if (nums[i] !== nums[i-1]) {
            count = 1
        }
        maxCount = Math.max(maxCount, count)
    }
    return nums.length === 0 ? 0 : maxCount
};