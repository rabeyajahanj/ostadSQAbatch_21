import String from './parentString.js';

class Stringvalue extends String {
    constructor(a) {
        super(a);
    }
    showText(){
        if(this.a.length > 0){
          let text = "";
          for(let i=this.a.length-1;i>=0;i--){
            text += this.a[i];
          }
          return text;
        }
    }
}
const result = new Stringvalue("Using Inheritance");
console.log(result.checkSnum())
console.log(result.showText());