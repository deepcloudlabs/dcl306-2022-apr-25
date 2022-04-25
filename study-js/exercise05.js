let numbers = new Array(4, 8, 15, 16, 23, 42);
let lotteryNumbers = [4, 8, 15, 16, 23, 42];
let [first, ...rest] = lotteryNumbers;
let anotherNumbers = [...numbers]; // cloned version of numbers
anotherNumbers.push(108)
let yetAnotherNumbers = numbers;
yetAnotherNumbers.push(549);