import Largeone from './largeNumber.js';

class Number extends Largeone {
    constructor(x,y,z) {
        super(x,y,z);
    }
    checkNumber(){
          if(this.x>this.y && this.x>this.z){
              return `Large:${this.x}`;
          }else if(this.y>this.z && this.y>this.z){
              return `Large:${this.y}`;
          }else{
            return `Large:${this.z}`;
          }

        }
    }
const result = new Number( 756786,7456789, 5678678);
console.log(result.findNumber());
console.log(result.checkNumber());
