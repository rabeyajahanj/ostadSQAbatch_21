function text(x){
   if(x.length>0){
    let text = "";
    for(let i=x.length-1;i>=0;i--){
        text += x[i];
    }
    return text;
  }
}
const result = text("This the second Class of programming language javascript");
console.log(result);
