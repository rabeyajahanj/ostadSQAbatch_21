// //loop function , 'For loop' for QA engineer
// function numberPrint (){ //function syntex, parameter
// //initialization,condition, increment/decrement
//    for (let i=0;i< 6;i++){  //"let i=0"variable declare, then condition apply 
//        console.log (i);
//    }
// }
// numberPrint();

// Class concept keyword
// class er under a method call kora jay multiple
// class er property er moddhe ja thakne oita call korbe shape er moddhe ki ki object thakbe
class shape{   // class name hobe second bracket{}; + class er moddhe kono funtion keyword use korte dey na JS
                  //class er kichu properties thake customize object banaite hoy
      numberPrint(){
          for (let i=0;i<=10;i++){
             console.log (i);
          }
      } // call the name or method
}
const result = new shape (); // ekta variable like const result er shathe add korle customied object implement korte hobe
//new shape (); //that's how make object inside the class 
result.numberPrint();

//Inheritence syntex class "circle"/child extends "shape"/Parent{}   > shows in forth Class
