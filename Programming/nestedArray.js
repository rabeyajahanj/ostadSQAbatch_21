//How to print nested array inside the function?
// function deepFlattern(array, data = []){
//     for (let i = 0; i < array.length; i++){
//      //console.log(array[i]);
//       if(Array.isArray(array[i])){
//           deepFlattern(array[i],data);
//       }else{
//           data.push(array[i]);
//       }  
//     } 
//     return data;
// }
// const result = deepFlattern([1,2,3,4,5,[5,4,3,2,1],[0,1,2,3,],[6,7,8,9,],6,7,8,9,10]);
// console.log(result);


// const item = [];
// function deepFlattern(array){
//   for (let i = 0; i < array.length; i++){
//      if(Array.isArray(array[i])){
//         deepFlattern(array[i]);
//     }else{
//         item.push(array[i]);
//      }
//   }
//   return item;
// }
// const result = new deepFlattern ([1,2,3,4,5,[5,4,3,2,1],[0,1,2,3,],[6,7,8,9,],6,7,8,9,10]);
// console.log(result);

// function deepFlattern(array){
// const item = [];
//   for (let i = 0; i < array.length; i++){
//      if(Array.isArray(array[i])){
//         const nestedItems = deepFlattern(array[i]);
//         item.push(...nestedItems);
//       }else{
//         item.push(array[i]);
//      }
//   }
//   return item;
// }
// const result = new deepFlattern ([1,2,3,4,5,[5,4,3,2,1],[0,1,2,3,],[6,7,8,9,],6,7,8,9,10]);
// console.log(result);

//how to print nested object?
let objectData = {
  Information:{
        company1: "TCL",  //companies: ["TCL", "JMC", "None"]
        company2: "JMC",
        company3: "None",
            Address:{
              Address1: "Baridhara",
              Address2: "Banani",
              Address3: "N/A",
            },
            phone:{
                    tcl: '0124568556',
                    jmc: '0209899646',
                    none: '545046546',
                }        
  }
};
function showobj(nested){
  for(const key in nested){
    if (typeof nested[key] === "nested"){
      showobj(nested[key]);
    }else{
        console.log(key, ": ", nested[key]);
      }
  }
}
showobj(objectData)
console.log(objectData.Information.Address);
