class Solution {
public:
    bool isSubsequence(string s, string t) {
        if(s.length() > t.length()) return false;
        int subsequence = 0;
            for(int i=0; i<t.length(); i++){
                if(s[subsequence] == t[i]){
                    subsequence++;
                }
            }
        return subsequence == s.length();
    }
};
