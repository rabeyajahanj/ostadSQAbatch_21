// class Star{
//     piramid(){
//         for(let i = 0; i < 10; i++){
//          let s = "";
//             for(let j = 0; j < i; j++){
//              s +="* ";
//             }
//          console.log(s);

//         }
//     }
// }
// const result = new Star();
// result.piramid();
// //
// class Array{
//   ShowArray(){
//     let cars = ["A","B","c","D","E"];
//     for(let i = 0; i < cars.length; i++){

//        console.log(cars[i]);
//     }
//   }

// }
// const result = new Array();
// result.ShowArray();

//multiplea way of export
export {Array}
export default {Array} -> import a class name { } use korte hobe name

export/export default class Array{

}
export const name = "Rabeya";
export function countArray(){

}
export {Array, name, countArray}