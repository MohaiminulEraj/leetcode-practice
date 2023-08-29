class Solution {
private:
    bool validPalindromeUtil(string s, int left, int right){
        while(left < right) {
            if(s[left] == s[right]){
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
public:
    bool validPalindrome(string s) {
        int left = 0, right = s.length() - 1;
        while(left < right) {
            if(s[left] == s[right]){
                left++;
                right--;
            } else {
                return validPalindromeUtil(s, left + 1, right) || validPalindromeUtil(s, left, right - 1);
            }
        }
        return true;
    }
};