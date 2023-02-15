let nums = [2, 4, 5, 6, 7];

let squared = [];
res = 0;

for (i = 0; i < nums.length; i++) {
    res = nums[i] ** 2;
    squared.push(res);
}

console.log(squared);