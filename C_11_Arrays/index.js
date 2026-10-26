// // // // // // // // // // // // let a = 10;
// // // // // // // // // // // // if (a) {
// // // // // // // // // // // //     console.log(a)
// // // // // // // // // // // // } else {
// // // // // // // // // // // //     a = 11
// // // // // // // // // // // // }
// // // // // // // // // // // // function first(a, b) {
// // // // // // // // // // // //         a = 80x
// // // // // // // // // // // //     console.log("Its a first function", a, b)

// // // // // // // // // // // // }
// // // // // // // // // // // // function second(b) {

// // // // // // // // // // // //     console.log(b)
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(a)
// // // // // // // // // // // // first(12, 40);
// // // // // // // // // // // //     second(a)




// // // // // // // // // // // // let OBN24Name=["akarsh","aryan","dhruv","nikhil"]
// // // // // // // // // // // // let multipleDatatypes=["khushi",true,21,15,undefined,null];
// // // // // // // // // // // // const arr=[1,2,3,4,0,67];
// // // // // // // // // // // // console.log(arr.length)
// // // // // // // // // // // // arr=[9,2,1,1,3]
// // // // // // // // // // // // console.log(arr[0])
// // // // // // // // // // // // console.log(arr[1])
// // // // // // // // // // // // console.log(arr[2])
// // // // // // // // // // // // console.log(arr[3])
// // // // // // // // // // // // console.log(arr[14])
// // // // // // // // // // // // arr[3]=6;
// // // // // // // // // // // // arr[2]="akarsh";
// // // // // // // // // // // // console.log(arr)

// // // // // // // // // // // // const arr=[1,2,3,4,0,67];
// // // // // // // // // // // // arr[9]=90
// // // // // // // // // // // // for(let i=0;i<=arr.length-1;i++){
// // // // // // // // // // // //     console.log(arr[i],"forword")
// // // // // // // // // // // // }
// // // // // // // // // // // // for(let i=arr.length-1;i>=0;i--){
// // // // // // // // // // // //     console.log(arr[i],"backword")
// // // // // // // // // // // // }
// // // // // // // // // // // // console.log(arr)
// // // // // // // // // // // const arr=[1,2,3,4,0,67];
// // // // // // // // // // // let length= arr.length;
// // // // // // // // // // // let sum=0;
// // // // // // // // // // // for(let i=0;i<arr.length;i=i+2){
// // // // // // // // // // // sum=sum+arr[i]
// // // // // // // // // // // }
// // // // // // // // // // // console.log(sum)
// // // // // // // // // // // console.log(sum/length)

// // // // // // // // // // // // sum of even number 
// // // // // // // // // // // // average of even 
// // // // // // // // // // // // sum of odd number 
// // // // // // // // // // // // average of odd
// // // // // // // // // // // const arr1=[1,2,3,4,0,67];
// // // // // // // // // // // let sum_Even=0;
// // // // // // // // // // // let sum_Odd=0;
// // // // // // // // // // // let OddCount=0;
// // // // // // // // // // // let EvenCount=0;
// // // // // // // // // // // for(let i=0;i<arr1.length;i++){
// // // // // // // // // // // if(arr[i]%2==0){
// // // // // // // // // // // sum_Even += arr[i];
// // // // // // // // // // // EvenCount++
// // // // // // // // // // // }else{
// // // // // // // // // // //     sum_Odd += arr[i]
// // // // // // // // // // //     OddCount++
// // // // // // // // // // // }
// // // // // // // // // // // }
// // // // // // // // // // // console.log(sum_Even,sum_Even/EvenCount )
// // // // // // // // // // // console.log(sum_Odd,sum_Odd/OddCount)




// // // // // // // // // // // let arr=[1,2,3,1,2,4,5,1,6]
// // // // // // // // // // // let k=1;
// // // // // // // // // // // let occurence=0;
// // // // // // // // // // // for(let i=0;i<arr.length;i++){
// // // // // // // // // // //     if(arr[i]==k){
// // // // // // // // // // // occurence++;
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // console.log(occurence)

// // // // // // // // // // let arr=[-1,2,3,-2]
// // // // // // // // // // let max=-Infinity;
// // // // // // // // // // let min=Infinity;
// // // // // // // // // // for(i=0;i<arr.length;i++){
// // // // // // // // // // if(max<arr[i]){
// // // // // // // // // //    max=arr[i]; 
// // // // // // // // // // }

// // // // // // // // // // if(min>arr[i]){
// // // // // // // // // //     min=arr[i]
// // // // // // // // // // }
// // // // // // // // // // }
// // // // // // // // // // console.log(max,"max")
// // // // // // // // // // console.log(min,"min")



// // // // // // // // // // let arr=[-1000,-1000,-3,-200,-90]
// // // // // // // // // // let largest=-Infinity;
// // // // // // // // // // let secondLargest=-Infinity
// // // // // // // // // // for(i=0;i<arr.length;i++){
// // // // // // // // // // if(largest<arr[i]){
// // // // // // // // // //     secondLargest=largest
// // // // // // // // // //    largest=arr[i]; 
// // // // // // // // // // }else if(largest>arr[i] && arr[i]>secondLargest){
// // // // // // // // // //     secondLargest=arr[i]
// // // // // // // // // // }
// // // // // // // // // // }
// // // // // // // // // // console.log(largest,"largest")
// // // // // // // // // // console.log(secondLargest,"secondLargest")

// // // // // // // // // let arr=[1,2,3,4,5];

// // // // // // // // // // let res=arr.push(9);
// // // // // // // // // // let res2=arr.pop()
// // // // // // // // // let res=arr.unshift(10);
// // // // // // // // // console.log(arr,res,"unshift")
// // // // // // // // // let res2=arr.shift()
// // // // // // // // // console.log(arr,res2,"shift")


// // // // // // // // let arr=[1,2,3];
// // // // // // // // let arr2=[1,2,3];
// // // // // // // // let res=arr.concat(arr2)
// // // // // // // // // let res=arr.reverse();
// // // // // // // // console.log(res);
// // // // // // // // // let result=res.includes(3);
// // // // // // // // let result=res.indexOf(4);
// // // // // // // // console.log(result)
// // // // // // // // // arr[0]=90;
// // // // // // // // // let res=arr.push(9);
// // // // // // // // // console.log(res,"res",arr)
// // // // // // // // // let res2=arr.unshift(res);
// // // // // // // // // console.log(res2,"res2",arr)
// // // // // // // // // arr.pop();
// // // // // // // // // arr.shift();
// // // // // // // // // console.log(arr)


// // // // // // // let arr=[1,0,2,0,3,0,9];

// // // // // // // let res=[]
// // // // // // // // for(let i=arr.length-1;i>=0;i--){
// // // // // // // //    res.push( arr[i])
// // // // // // // // }
// // // // // // // // console.log(res)
// // // // // // // // let length=arr.length
// // // // // // // // for(let i=0;i<length;i++){
// // // // // // // //    res[i]=arr.pop()
// // // // // // // // }
// // // // // // // // console.log(res)

// // // // // // // let length=arr.length
// // // // // // // for(let i=0;i<length;i++){
// // // // // // //    res.unshift(arr[i])
// // // // // // // }
// // // // // // // console.log(res)


// // // // // // // // // let arr=[1,2];

// // // // // // // // // function customPop(arr){
// // // // // // // // //   let lastElement=arr[arr.length-1]
// // // // // // // // //   arr.length=arr.length-1;
// // // // // // // // //   return lastElement

// // // // // // // // // }

// // // // // // // // // console.log(customPop(arr))
// // // // // // // // // console.log(arr)

// // // // // // // // // function customPushMethod(arr,n){
// // // // // // // // //   let length=arr.length;

// // // // // // // // //   arr[length]=n

// // // // // // // // //   return arr.length;
// // // // // // // // // }

// // // // // // // // // console.log(customPushMethod(arr,3))
// // // // // // // // // console.log(arr)

// // // // // // // // let arr=[1,2,3,4,5,6,7,8,9];

// // // // // // // // // function abc(n,m=arr.length-1){
  
// // // // // // // // // }
// // // // // // // // // abc(2)

// // // // // // // // // let res=arr.slice(2);
// // // // // // // // let res=arr.slice(-15,-2);
// // // // // // // // // let res=arr.slice(-5,-10);
// // // // // // // // console.log(res)
// // // // // // // // console.log(arr)










// // // // // // // const with array;

// // // // // // // const arr=[1,2,3];
// // // // // // // arr[4]=5;
// // // // // // // arr.length=arr.length-1;

// // // // // // // arr=[4,5,6,7];;
// // // // // // let arr=[1,2,3,4,[[5,[7,[8]]],6,7],[8,9,0]]
// // // // // // const res=arr.flat(1);
// // // // // // const res1=arr.flat(Infinity);
// // // // // // // console.log(res1,"res1")
// // // // // // // console.log(res,"res")
// // // // // // // console.log(arr,"arr");
// // // // // // console.log(Math.max(...res1))






// // // // // let a=[1,2,3];
// // // // // let b=[4,5,6];
// // // // // let res=[...a,...b];
// // // // // // console.log(res)


// // // // // function abc(arr,start,end,deletecount,...a){
// // // // //     console.log(arr,"arr")
// // // // //     console.log(start,"start")
// // // // //     console.log(deletecount,"delete")
// // // // //     console.log(a,"rest values")

// // // // // }
// // // // // abc([3,4,5,6,7],1,2,3,4,5,6,7,8,9)



// // // // let arr=[1,2,3];
// // // // let a=arr[0];
// // // // let b=arr[1];
// // // // let c=arr[2];
// // // // let [x,y,z,...m]=arr;
// // // // console.log(x,y,z)
// // // // console.log(m);

// // // let a=10;
// // // let b=20;
// // // let c=a;
// // // a=b;
// // // b=c;
// // let arr=[1,2];
// // [[a,b]]=[[b,a]];

// // [[arr[i+1],arr[i]]=[[arr[i],arr[i+1]]]
// // arr[1]=arr[0]

// let arr1=[1,2,3,[9]];

// // let arr2=[...arr1];
// //  arr2[3][3]=7;
// let arr2= structuredClone(arr1);
//   arr2[3][3]=7;
//  console.log(arr2)
//  console.log(arr1)

//  let arr=[1,2,3,4,53,6,7,8,9,0,];
// // let res=[]


// let d=0;
// let n=arr.length-1;//4
// while(d<n){
// // let h=arr[d]
// // arr[d]=arr[n];
// // arr[n]=h;


// [arr[d],arr[n]]=[arr[n],arr[d]];
// n--;
//  d++;

// }

// console.log(arr)
