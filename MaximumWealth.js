// m x n integer grid called accounts
// Return the wealth the richest customer has

var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = accounts[i].reduce((a, b) => a + b, 0);

        if (sum > maxWealth) {
            maxWealth = sum;
        }
    }
    return maxWealth;
};
