class Star{
    piramid(){
        for(let i = 0; i < 10; i++){
         let s = "";
            for(let j = 0; j < i; j++){
             s +="* ";
            }
         console.log(s);

        }
    }
    square(){
        for(let i = 0; i < 6; i++){
         let res = "";
            for(let j = 0; j < i; j++){
              res += "* ";
            }
        }
        console.log(res);
     }
}
const result = new Star();
result.piramid();
result.square();