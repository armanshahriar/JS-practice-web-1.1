// // alert("How old are you")
// var age = 200;
// console.log(age)

// function helloWorld(){
//    var name =  prompt("Whats your name ")
//    document.getElementById("jack").innerHTML = name;
// //    console.log("your name is " + name)
// }

// helloWorld();

// function totalNumber(){
//    var firstNumber = prompt("enter your first number")
//    var secondNumber = prompt("enter your second number")
//    var fullNumber = firstNumber - secondNumber;
//    document.getElementById("mak").innerHTML = fullNumber;
// }

// totalNumber();

// function dubleNumber (){

//    var number = prompt("Enter your number")
//    var dubleIt = number * 2 ;
//    document.getElementById("make").innerHTML= dubleIt

// }
// dubleNumber();
// function dubleNumber (number){

//    var dubleIt = number * 2 ;
//    console.log(dubleIt)

// }
// dubleNumber(100);
// dubleNumber(170);
// dubleNumber(10540);
// dubleNumber(15100);
// dubleNumber(1040);
// dubleNumber(10130);
// dubleNumber(15400);

// function Name(name){
//    document.getElementById("userName").innerHTML = name
// }
// var user = prompt("Enter Your name:  ")
// Name(user)


// var student = 5;
// for ( var i = 0 ; i <= student; i++){
//    if(i/2 == 0){
//       console.log("Stop")
//    }
//    console.log("Go ahead", i)
// }

// function textChange() {
//    alert("Hey do you want to change your content")
//    document.getElementById("changeText").innerHTML = "go ahead";
// }

function footToInch() {
   var input = document.getElementById("foot").value;
   var input = input * 12;

   document.getElementById("inch").innerHTML = input;
}