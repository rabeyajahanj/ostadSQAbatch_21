// what is object in javascript->"for comment shortcut is ctrl + /"
// const person = {
//     firstName: "Rabeya",
//     lastName: "Jahan",
//     Mobile: '09954-235-78545',
//     Phone: '014455464999',
// };
// console.log(person)
// console.log(person.firstName);


// how to write function?
// function sum(){
//     return 5 + 10;
// }
// const result = sum();
// console.log(result);
// console.log(sum());

// Function with parameter?
// function sum(x,y) {
// //when the function is called, the values of x and y are passed to the function ia parameter. The function then uses these values to perform the addition operation and returns the result.
// //return 5+10
// return x + y;
// }
// console.log(sum(5,10));//where the value is passed to the function as arguments.

// const add = (x,y) => {
//     return x + y;
// }
// console.log(add(10,10));

// using Conditions if else
// function sum(a){
//     if (a => 10){
//         return "yes,a is greater than 10";
//     }
//     else{
//         return 0;
//       }
//     }
//     const result = sum(20);
//     console.log(result);
//For multiple loops or conditional statements
// function sum (b){
//     if(b > 10){
//        return b;
//     }else if(b=10){
//        return b+2; 
//     }else{
//        return 0;
//     }
// }
// const result = sum(10);
// console.log(result);



/////Assignment///////

// even odd-1
//  function evenodd (num){
//     if(num % 2===0){
//         return `${num} is Even Number`;
//     }else{
//         return `${num} is Odd Number`;
//     }
// }
// const result = evenodd(656);
// console.log(result);


//find the largest three number-1
// function largestnum(x,y,z){
//    if(x>y && x>z){
//      return x;
//    }else if(y>x && y>z){
//      return y;
//    }else{
//      return z;
//     }
// }
// const result = largestnum(254,6464,54733)
// console.log(result);

//reverse string-1
// function text(x){
//    if(x.length>0){
//     let text = "";
//     for(let i=x.length-1;i>=0;i--){
//         text += x[i];
//     }
//     return text;
//   }
// }
// const result = text("This the second Class of programming language javascript");
// console.log(result);

//Count vowels in a string-1
// function vowels(string){
//     let vowels = "";
//     for(let i=0;i<string.length;i++){
//         if(string[i] === "a" || 
//             string[i] === "e" || 
//             string[i] === "i" || 
//             string[i] === "o" || 
//             string[i] === "u" || 
//             string[i] === "A" || 
//             string[i] === "E" ||
//             string[i] === "I" || 
//             string[i] === "O" || 
//             string[i] === "U"){
//             vowels += string[i];
//         }
//     }
//     return vowels;
// }
// const result = vowels("This is the Module four Assignment");
// console.log(result);


// function countDuplicates(arr){
// const str = [];
// const duplicates = [];
// for(const item of arr){
//         if(str.includes(item)){
//       str.push(item);
//     }else{
//             if(!duplicates.includes(item)){
//                   duplicates.push(item);      
//                 }
//          }
// }
// return duplicates;
// }
// const result = countDuplicates(["Meena","Meera","Ishu","Meena","Ishu","Meera"]);
// console.log(result);


//Arrow function
const multiply = (x,y) => {
    (`$(x) is greater than $(y)`);
}

