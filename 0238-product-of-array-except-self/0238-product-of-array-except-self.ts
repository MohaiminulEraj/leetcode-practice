function productExceptSelf(nums: number[]): number[] {
    let prefix = 1
    let postfix = 1
    const res:number[] = [1 * nums.length]
    for(let i = 0; i < nums.length; i++){
        res[i] = prefix;
        prefix *= nums[i]
    }
    for(let i=nums.length - 1; i >= 0; i--){
        res[i] *= postfix
        postfix *= nums[i]
    }
    
    return res
};