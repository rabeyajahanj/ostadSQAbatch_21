function countDuplicates(arr){
const str = [];
const duplicates = [];
for(const item of arr){
        if(str.includes(item)){
      str.push(item);
    }else{
            if(!duplicates.includes(item)){
                  duplicates.push(item);      
                }
         }
}
return duplicates;
}
const result = countDuplicates(["Meena","Meera","Ishu","Meena","Ishu","Meera"]);
console.log(result);
