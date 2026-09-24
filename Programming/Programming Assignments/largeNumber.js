// class Lnumber{
//     constructor(x,y,z){
//         this.x = 46546;
//         this.y = 547166;
//         this.z =8235;
//     }
//     checkNumber(){
//           if(this.x>this.y && this.x>this.z){
//               return this.x;
//           }else if(this.y>this.z && this.y>this.z){
//               return this.y;
//           }else{
//             return this.z;
//           }

//         }
//     }
// const result = new Lnumber();
// console.log(result.checkNumber());
// export Lnumber();


class Lnumber{
    constructor(x,y,z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    findNumber() {
        return `The Number is : ${this.x}, ${this.y},${this.z}`;
    }
}
export default Lnumber;
