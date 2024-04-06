
// print 1 to 5
//for(let count = 1; count <= 5; count ++){
  //  console.log ("mandeep kaur);




// while loop 

//let i = 1 ;
//while (i <= 5){
  //console.log ("mandeep kaur ");
  //i ++; 
//}


//do - while-loop 

//let i = 1;
//do {
  //console.log ("i = ", i) 
  //i ++ ;
//} while (i <= 10 ); 



// for- of- loop  

//let str = "mandeep kaur ";
//let size = 0;
//for (let i of str ){
 // console.log ("i = ", i );
  //size++ ;
//}
//console.log ("string size = ", size ); 



//for-in-loop


//let student ={
  //name: "mandeep kaur",
  //age: 20,
  //cgpu: 7.5,
  //ispass: true,
//};


//for (let key  in student){
  //console.log ("key = ", key , " value =", student [key]);
//}



// practice Qs1

//for (let num = 0;  num <= 100 ; num ++){
  //if (num % 2 == 0){
    //console.log ("num = ", num);
  //}
//}


//practice Qs2 

let gameNum = 25;
let userNum = prompt ("guess the game number;");

while (userNum !== gameNum ){
  userNum = prompt ("your entered wrong number . guess agin:");

}
console.log ("congratulations, you entered right number"); 