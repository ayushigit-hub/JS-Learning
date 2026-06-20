// sum all numbers
const num = [5, 10, 15]
const total = num.reduce((acc, num) => acc + num, 0)
// console.log(total)

// find the largest number
const nums = [5, 12, 3, 20, 8]
const largest = nums.reduce((acc, num) => {
    return num > acc ? num : acc;
}, nums[0])
                                                                                              
console.log(largest)