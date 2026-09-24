// class Vowels{
//     constructor(x){
//         this.x = x;
//     }
//   showString(){
//         let string = ""; 
//          for(let i = 0 ; i < this.x.length; i++){
//              if (this.x[i] === "a" ||
//                  this.x[i] === "e" || 
//                  this.x[i] === "i" || 
//                  this.x[i] === "o" || 
//                  this.x[i] === "u" || 
//                  this.x[i] === "A" || 
//                  this.x[i] === "E" || 
//                  this.x[i] === "I" || 
//                  this.x[i] === "O" || 
//                  this.x[i] === "U"){
//                 string += this.x[i];
//             }

//          }
//         return string;
//     }
// }
// const result  = new Vowels("Rabeya Jahan");
// console.log(result.showString());

class Vowels{
    constructor(x) {
        this.x = x;
    }
    checkSnum() {
        return `The Line is : ${this.x}`;
    }
}
export default Vowels;