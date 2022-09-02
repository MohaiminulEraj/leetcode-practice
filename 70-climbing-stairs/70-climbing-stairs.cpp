class Solution {
public:
    int climbStairs(int n) {
        if(n==1) return 1;
        int a = 1;
        int b = 1;
        int c;
        for(int i=2; i<=n; i++){
            c = a + b;
            a = b; b = c;
        }
        return c;
    }
};