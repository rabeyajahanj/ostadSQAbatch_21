import {Shape} from './ClassThirdforth.js';   // import moduleName from parentclassdirectory name
//import {Shape as Data} fromq './classThirdforth.js'; 
//Shape class k different different name a call kora jabe it's call 'alias'

// const result = new Shape();
// result.showShape();
// result.circle();
class Rectangle extends Shape{    //Inheritance; reuse properties & methods from another class
      triangle (){
           console.log(this.width-this.height);
    }
}
const result = new Rectangle();  //object
//result.square(); 
result.showShape();        
result.circle();
result.triangle();