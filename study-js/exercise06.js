let lotteryNumbers = [4, 8, 15, 16, 23, 42];

let sum=0;
// loop #1
for (let i = 0; i < lotteryNumbers.length; ++i) {
    let number = lotteryNumbers[i];
    if (number % 2 === 0){
        let cube = number * number * number;
        sum += cube;
    }
}
console.log(`Sum: ${sum}`);
// loop #2
sum = 0
for (let i in lotteryNumbers) {
    let number = lotteryNumbers[i];
    if (number % 2 === 0){
        let cube = number * number * number;
        sum += cube;
    }
}
console.log(`Sum: ${sum}`);
// loop #3
sum = 0
for (let number of lotteryNumbers) {
    if (number % 2 === 0){
        let cube = number * number * number;
        sum += cube;
    }
}
console.log(`Sum: ${sum}`);
// loop #4 : filter/map/reduce -> functional programming
// functional programming --> functions:
//   i) higher-order function: filter, map, reduce
//  ii) pure function: lambda expression
sum = lotteryNumbers.filter(x => x%2 === 0)
                    .map(u => u*u*u)
                    .reduce((s,v) => s+v, 0);
console.log(`Sum: ${sum}`);
