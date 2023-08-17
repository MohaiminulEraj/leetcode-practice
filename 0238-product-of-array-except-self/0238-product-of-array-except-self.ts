function productExceptSelf(nums: number[]): number[] {
    const prefix:number[] = []
    const postfix:number[] = []
    const res:number[] = []
    prefix.push(nums[0])
    postfix.push(nums[nums.length - 1])
    for(let i = 1; i < nums.length; i++){
        prefix.push(prefix[i-1] * nums[i])
    }
    for(let i=nums.length - 2; i > 0; i--){
        postfix.unshift(postfix[0] * nums[i])
    }
    postfix.unshift(postfix[0]*nums[0])
    for(let i=0; i<nums.length; i++){
        if(i-1 < 0){
            res.push(postfix[i+1])
        }
        else if(i+1 > nums.length - 1){
            res.push(prefix[i-1])
        } else {
            res.push(prefix[i-1]*postfix[i+1])
        }
    }
    return res
};