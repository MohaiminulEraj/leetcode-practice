class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int left = 0, right = 0;
        while(right < nums.size()){
            int c = 1;
            while(right + 1 < nums.size() && nums[right] == nums[right + 1]){
                right++;
                c++;
            }
            for(int i = 0; i < min(2, c); i++){
                nums[left] = nums[right];
                left++;
            }
            right++;
        }
        return left;
    }
};