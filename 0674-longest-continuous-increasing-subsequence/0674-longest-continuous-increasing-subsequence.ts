function findLengthOfLCIS(nums: number[]): number {
    let max = 1
    let c = 1
    for(let i=1; i<nums.length; i++){
        if(nums[i] > nums[i-1]){
            c++;
        } else {
            max = Math.max(max, c)
            c = 1
        }
    }

    return Math.max(max, c);
};