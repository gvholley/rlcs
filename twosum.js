//For the nums array and the target integer, return indices
//So they add up to target

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums.lastIndexOf(target - nums[i]) !== i && nums.lastIndexOf(target-nums[i]) >=0){
            return [i,nums.lastIndexOf(target - nums[i])]
        }
    }
    return []
};
