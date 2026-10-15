// console.log("welcome to the Class!!!!!")
// greetings();
// function greetings(){

//     console.log("good afternoon to everyone!!!!")
// }

// greetings();



// // function (){

// // }
// // greet()// can't access u will get error 
// var greet=function(){
//     console.log("hello guys!!!!")
// }

// greet();

console.log("good afternoon to everyone!!!!")
function greetings(a, b) {
    console.log(a, b)
    // console.log("hello",name);
    // console.log("my age is ", age)
}

// greetings("Akarsh",28);
// greetings("utsav","28");
// greetings("aryan",18);



// function abc(a,b){
//     console.log(b)
//     console.log(a)
// }

// abc(10,15)
// function abcd(b){
//     console.log(b,"value")
// }

// abcd(null)

// var a=null;

// console.log(a);


// function cal(a, b, op) {
//     let result;
//     switch (op) {
//         case "+":
//             result=a+b ;
//             break;
//         case "-": 
//         result = a-b
//             break;
//         case "*": 
//         result = a*b
//             break;
//         case "/": 
//         result=a / b;
//         break;
//         default: console.log("invalid operator");
//     }
//     return result
// }
// console.log(cal(2, 3, "*"))



function cal(a, b, op) {

    switch (op) {
        case "+":
            return a + b;

        case "-":
            return a - b

        case "*":
            return a * b

        case "/":
            return a / b;

        default:
            return "invalid operator";
    }
}
console.log(cal(2, 3, "*"));
let result =cal(2, 3, "*")
console.log(result,"result")