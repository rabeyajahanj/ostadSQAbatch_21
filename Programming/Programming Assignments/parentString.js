// class String{
//     constructor(a){
//       this.a = "Using Class constructor method";
//     }
//     showText(){
//         if(this.a.length > 0){
//           let text = "";
//           for(let i=this.a.length-1;i>=0;i--){
//             text += this.a[i];
//           }
//           return text;
//         }
//     }
// }
// const result = new String();
// console.log(result.showText());

class String{
    constructor(a) {
        this.a = a;
    }
    checkSnum() {
        return `Sentence: ${this.a}`;
    }
}
export default String;