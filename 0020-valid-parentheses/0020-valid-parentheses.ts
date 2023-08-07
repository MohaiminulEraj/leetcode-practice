function isValid(s: string): boolean {
    const closingToOpening = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack: string[] = []
    const chars = s.split('')

    for(let i=0; i< chars.length; i++){
        const elem = chars[i]
        if(elem in closingToOpening){
            const pop = stack.pop()
            if(closingToOpening[elem] === pop){
                continue;
            } else {
                return false;
            }
        } else {
            stack.push(elem);
        }
    }

    if (stack.length > 0) return false;

    return true;
  
};