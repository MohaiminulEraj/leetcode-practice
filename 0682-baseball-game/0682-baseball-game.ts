function calPoints(operations: string[]): number {
    let stack:number[] = [];
    for(let i=0; i<operations.length; i++){
        if(Number(operations[i])) {
            stack.push(Number(operations[i]))
        }
        else if(operations[i] === 'C') {
            stack.pop()
        }
        else if(operations[i] === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        }
        else if(operations[i] === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }
    }
    let totalSum = 0
    stack.forEach(value => {
        totalSum+=value
    })
    return totalSum;
};