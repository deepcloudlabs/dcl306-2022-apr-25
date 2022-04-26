export function createDigit(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function createSecret(level) {
    let digits = [];
    digits.push(createDigit(1, 9));
    while (digits.length < level) {
        let digit = createDigit(0, 9);
        if (digits.includes(digit)) continue;
        digits.push(digit);
    }
    let number = digits.reduce((sum, n) => 10 * sum + n, 0);
    console.log(number);
    return number;
}