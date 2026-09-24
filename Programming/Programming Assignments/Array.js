// class Duplicates{
//     constructor (arr) {
//         this.arr = arr;
//         this.str = [];
//         this.duplicates = [];
//     }
//     countArray(){
//     for (const item of this.arr){
//         if (this.str.includes(item)){
//             if(!this.duplicates.includes(item)){
//                 this.duplicates.push(item);
//             }
//         }else{
//             this.str.push(item);
//         }
//      }
//      return this.duplicates;
//     }
// }
// const result = new Duplicates(["Meena","Meera","Ishu","Meena","Ishu","Meera"]);
// console.log(result.countArray());

class Duplicates{
    constructor(arr) {
        this.arr = arr;
        this.str =[];
        this.duplicates = [];
    }
    checkSnum() {
        return `Duuplicates name's  : ${this.duplicates}`;
    }
}
export {Duplicates};
