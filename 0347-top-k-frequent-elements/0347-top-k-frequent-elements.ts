function topKFrequent(nums: number[], k: number): number[] {
    let myMap = {}
    const res = []
    for(let i=0; i<nums.length; i++){
        if(nums[i] in myMap){
            myMap[nums[i]] = myMap[nums[i]] + 1
        } else {
            myMap[nums[i]] = 1
        }
    }
    
    myMap = Object.keys(myMap).sort((a, b) => myMap[b] - myMap[a])

    for(let i = 0; i< k; i++){
        res.push(parseInt(myMap[i]))
    }

    return res
};