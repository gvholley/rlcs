//For the array numbers that is in ascending order,
//Find two numbers so they add up to the target number

var twoSum = function(numbers, target) {
    let solution = {};
    for (i in numbers){
        if (target - numbers[i] in solution){
            return [solution[target - numbers[i]] + 1, Number(i) + 1];
        }
        solution[numbers[i]] = Number(i);
    }
};
