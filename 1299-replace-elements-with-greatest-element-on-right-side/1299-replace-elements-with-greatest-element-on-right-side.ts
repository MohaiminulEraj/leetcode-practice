function replaceElements(arr: number[]): number[] {
    let maxNum = -1;
    for(let i=arr.length-1; i>=0; i--){
        let cur = arr[i];
        arr[i]=maxNum;
        if(cur > maxNum) maxNum = cur
    }
    return arr
};