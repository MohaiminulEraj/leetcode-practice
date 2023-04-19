function getConcatenation(nums: number[]): number[] {
    let concatedArray = []
    for(let i=0; i<nums.length; i++){
        concatedArray.push(nums[i])
    }
    for(let i=0; i<nums.length; i++){
        concatedArray.push(nums[i])
    }
    return concatedArray
};