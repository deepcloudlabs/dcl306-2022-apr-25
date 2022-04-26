export default class Move {
    constructor(perfectMatch, partialMatch) {
        this.perfectMatch = perfectMatch;
        this.partialMatch = partialMatch;
        this.message = "";
        if (perfectMatch === 0 && partialMatch === 0) {
            this.message = "No Match!";
        } else {
            if (partialMatch > 0) {
                this.message += `-${partialMatch}`;
            }
            if (perfectMatch > 0) {
                this.message += `+${perfectMatch}`;
            }
        }
    }
}