// // if(){

// // }else{

// // }


// // if (){

// // }else if(){

// // }else{

// // }

// // ternary operator?

// // Login and signup 
// // let isLogin=true;
// // isLogin?"Dashboard":"login Page";

// // let role="admin"// user// coustomer;


// // let marks=33;
// // if(marks>=33){
// //     console.log("pass")

// // }else{
// //     console.log("fail")
// // }

// // let result= marks>=33 ? marks>=90 ? "A":"B":"fail";
// // console.log(result,"by ternary operator")

// // ternary Cond ? "true":"false";


// // if marks is less than 33 direct say fail and grade will D
// // if marks is above 90 then grade is A And u have pass
// // if marks is above 70 then grade is B And u have pass
// // if marks is above 33 then grade is C And u have pass
// // BY USING TERNARY OPERATOR

// let marks=32;

// let result= marks>=90 ? "A+ pass" :
//             marks>=70 ? "B+ Pass" :
//             marks>=33 ? "C+ pass" :
//             "fail";
//             console.log(result);

// if else , nested if else, ternary operator , nested ternary operator
// Switch

// 1=monday
// 2= tuesday
// 3= wedd
// if(num===1)
// let num=2;
// switch(num){
//     case 1:
//         console.log("One");
//         break;
//     case 2: 
//         console.log("Two");
//           break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("Invalid Number")

// }

// condition  2 choices then we will prefer ternary operator;
// condition is fixed values then we are using switch condition 
// condition is range values then we are prefering the nested if else block


// by using switch case make a calculator
// operator +/*-%
// let a ,let b ;===

// let operator = "-";
// let a = 40;
// let b = 20;
// switch (operator) {
//     case "+":
//         console.log(a + b)
//         break;
//     case "-":
//         console.log(a - b)
//          break;
//     case "/":
//         console.log(b / a)
//          break;
//     case "*":
//         console.log(a * b)
//          break;
//     case "%":
//         console.log(a % b)
//          break;
//     default:
//         console.log("Invalid Operator")
// }

// let day=7// weekdays 7//weekends

// switch(day){
//     case 1:
//     case 2:
//     case 3:  
//     case 4:
//     case 5:
//     console.log("Weekdays");
//     break;
//     case 6:
//     case 7:
//      console.log("Weekends");
//     break;
//     default:
//         console.log("Invalid day;")
// }

// months 
// "jan" "feb"


// let age =18
// I have to check whether this person is adult or not 


// let age=46;
// i have to check whether the person is Child, mid person and Old person 

// traffic Signal 
// red 
// yellow
//green



// + operator


// let a ="10";
// let b="30";

// console.log(+a + (+b)) 




// switch 

// switch(fixed value){
//     case match:

//     default:



// }
// let op ="Sum"

// switch(op){
//     case "Sum":
//         console.log(10+79);
//         break;
//     case "dev":
//         console.log(70/10);
//         break;
//     case "Sub":
//          console.log(10-79);
//         break;
//     case "mult":
//          console.log(10*79);
//         break; 
//     default:
//         console.log("Invalid operator")
// }


// bitwise ope.



//  u have  provided role // admin, std, trainer

// userId="ak12"
// password: "swdfgh####"
// role: "std"

// if(userdiD=="ak124"){

// }


let role = "admin";
let userId = "aK123";
let pass = "demo123";

switch (role) {

    case "admin":
          if (userId === "ak123" && pass == "demo123") {
            console.log("login successfully!!!!")
        } else {
            console.log("invalid cred.!!!!")
        }
        break;
    case "std":
          if (userId === "ak123" && pass == "demo123") {
            console.log("login successfully!!!!")
        } else {
            console.log("invalid cred.!!!!")
        }
        break;
    case "trainer":
        if (userId === "ak123" && pass == "demo123") {
            console.log("login successfully!!!!")
        } else {
            console.log("invalid cred.!!!!")
        }
        break;
    default:
        console.log("invalid access / role")
}



// & | ^

// 0 & 1= 0
// 1

let num=5
let num2=3;

// console.log(5&3)
// 101 011