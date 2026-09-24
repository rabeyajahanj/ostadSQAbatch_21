function vowels(string){
    let vowels = "";
    for(let i=0;i<string.length;i++){
        if(string[i] === "a" || 
           string[i] === "e" || 
           string[i] === "i" || 
           string[i] === "o" || 
           string[i] === "u" || 
           string[i] === "A" || 
           string[i] === "E" ||
           string[i] === "I" || 
           string[i] === "O" || 
           string[i] === "U"){
           vowels += string[i];
        }
    }
    return vowels;
}
const result = vowels("This is the Module four Assignment");
console.log(result);