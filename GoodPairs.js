//Return the number of good pairs
//Example: [1, 1, 2, 2, 3, 3, 4, 5, 5] = 4 good pairs


var numIdenticalPairs = function(nums) {
    let count = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j]) count++
        }
    }
    return count
};
