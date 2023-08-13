function evalRPN(tokens: string[]): number {
    const stack:number[] = []
    for(let i=0; i<tokens.length; i++){
        if (tokens[i] === '+') {
            const a = Number(stack.pop())
            const b = Number(stack.pop())
            stack.push(b + a)
        }
        else if (tokens[i] === '*') {
            const a = Number(stack.pop())
            const b = Number(stack.pop())
            stack.push(b * a)
        }
        else if (tokens[i] === '-') {
            const a = Number(stack.pop())
            const b = Number(stack.pop())
            stack.push(b - a)
        }
        else if (tokens[i] === '/') {
            const a = Number(stack.pop())
            const b = Number(stack.pop())
            stack.push(Math.trunc(b / a))
        }
        else {
            stack.push(Number(tokens[i]))
        }  
    }
    return stack[0]
};