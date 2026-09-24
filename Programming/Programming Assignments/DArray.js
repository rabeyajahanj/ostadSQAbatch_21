import Duplicates from './Countvowle.js';

class Array extends Duplicates {
    constructor(arr) {
        super(arr);
    }
    countArray(){
    for (const item of this.arr){
        if (this.str.includes(item)){
            if(!this.duplicates.includes(item)){
                this.duplicates.push(item);
            }
        }else{
            this.str.push(item);
        }
     }
     return this.duplicates;
    }
}
const result = new Array(["Meena","Meera","Ishu","Meena","Ishu","Meera"]);
console.log(result.checkSnum());
console.log(result.countArray());