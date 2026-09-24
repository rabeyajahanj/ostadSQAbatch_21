// class Evenodd{
//     constructor(num) {
//         this.num = num;
//     }
//     showEvenodd () {
//         if(this.num % 2 === 0){
//              return `${this.num} is Even Number`;
//         }else{
//             return `${this.num} is Odd Number`;
//         }
//      }
// }    
// const result = new Evenodd (616176976);
// console.log(result.showEvenodd());
// //export {Evenodd};

class Evenodd {
    constructor(num) {
        this.num = num;
    }
    getNumber() {
        return `The Number is : ${this.num}`;
    }
}
export default Evenodd;