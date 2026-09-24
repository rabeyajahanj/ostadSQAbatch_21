// class Shape{                    //method     
//     //square(){}                // function call
//     constructor() {             //javascript reserve keyword object
//         this.width = 10; //2ta variable newa hoyeche 'this' javascript er ekta keyward and constructor variable er khetere
//         this.height = 15; 
//     }

//     showShape() {       //another function call
//         console.log(`width: ${this.width}, height: ${this.height}`); //print method how it will show
//         console.log(this.width+this.height); // sum the numbers
//     }
   
//     circle(){            //another function call
//         console.log(this.width*this.height);
//     }
// }
// // const result = new shape();   //object class create
// // //result.square(); 
// // result.showShape();        //see the result after print 
// // result.circle();

// //different type of export is there

// export {Shape}

class Shape{                    
    constructor() {           
        this.width = 10; 
        this.height = 15; 
    }

    showShape() {       
        console.log(`width: ${this.width}, height: ${this.height}`); 
        console.log(this.width+this.height); 
    }
   
    circle(){         
        console.log(this.width*this.height); //
    }
}
// const result = new shape();  
// //result.square(); 
// result.showShape();        
// result.circle();
// result.triangle();


export {Shape} // export parent class

