// class Evenodd{
//     constructor(num) {
//         this.num = num;
//     }
//     showEvenodd () {
//         if(this.num % 2 === 0){
//              return `This is ${this.num} Even Number`;
//         }else{
//             return `This is ${this.num} Odd Number`;
//         }
//      }
// }    
// const result = new Evenodd (61617697);
// console.log(result.showEvenodd());
// //export Evenodd();

class Evenodd {
    constructor(num) {
        this.num = num;
    }
    getNumber() {
        return `The Number is : ${this.num}`;
    }
}
export default Evenodd;