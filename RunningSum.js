//For the nums array, return a running sum
//Running sum = [1, 1+2, 1+2+3, 1+2+3+4] etc...

var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
};

//Alternative

var runningSum = function(nums) {
    let numsArray = [1, 2, 3, 4];
    const cumulativeSum = (sum => value => sum += value)(0);
    return numsArray.map(cumulativeSum)

};
