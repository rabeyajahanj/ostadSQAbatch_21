import Evenodd from './numberCheck.js';

class Integer extends Evenodd {
    constructor(num) {
        super(num);
    }
    showNumber() {
        if (this.num % 2 === 0) {
            return `which is ${this.num} Even Number.`;
        } else {
            return ` which is ${this.num} is Odd Number.`;
        }
    }
}
const result = new Integer(454646);
console.log(result.getNumber());   // from parent ✅
console.log(result.showNumber());