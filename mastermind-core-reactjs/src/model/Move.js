export default class Move {
    constructor(guess, secret) {
        this.guess = guess;
        this.perfectMatch = 0;
        this.partialMatch = 0;
        this.message = "";
        this.evaluate(guess, secret);
    }

    evaluate = (guess, secret) => {
        let guessAsString = guess.toString();
        let secretAsString = secret.toString();
        for (let i = 0; i < guessAsString.length; ++i) {
            let g = guessAsString.charAt(i);
            for (let j = 0; j < secretAsString.length; ++j) {
                let s = secretAsString.charAt(j);
                if (s === g) {
                    if (i === j) {
                        this.perfectMatch++;
                    } else {
                        this.partialMatch++;
                    }
                }
            }
        }
        if (this.perfectMatch === 0 && this.partialMatch === 0) {
            this.message = "No Match!";
        } else {
            if (this.partialMatch > 0) {
                this.message += `-${this.partialMatch}`;
            }
            if (this.perfectMatch > 0) {
                this.message += `+${this.perfectMatch}`;
            }
        }
    }

}