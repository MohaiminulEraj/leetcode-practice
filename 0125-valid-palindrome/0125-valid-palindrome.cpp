class Solution {
public:
    bool isAlphaNum(char c){
        int ascii = (int)c;
        if(
            int('A') <= ascii && int('Z') >= ascii
            ||
            int('a') <= ascii && int('z') >= ascii
            ||
            int('0') <= ascii && int('9') >= ascii
        ){
            return true;
        }
        return false;
    }

    bool isPalindrome(string s) {
        int left = 0, right = s.length() - 1;
        while(left < right){
            while(left < right && !isAlphaNum(s[left])){
                left++;
            }

            while(right > left && !isAlphaNum(s[right])){
                right--;
            }
            if(tolower(s[left]) != tolower(s[right])){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};