class Solution {
public:
    int climbStairs(int n) {
        if(n==0) return 0;
        if(n==1) return 1;
        int x = 1, y = 1, z = 1;
        for (int i = 2; i <= n; i++) {
            z = x + y;
            x = y;
            y = z;
        }
        return z;
    }
};