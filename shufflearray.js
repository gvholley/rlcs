//Shuffle the array to include n

var shuffle = function(nums, n) {
    if(n>nums.length){
           return []
        }
        let a = [],j=0
        for(let i=0,j=0;i<n,j<2*n;i++,j+=2){
            a[j]=nums[i]
            a[j+1]=nums[n+i]
        }
        return a
};
