// 08_01_2026

//write a code to add element at the front of an array
//  arr=[10,20,30,40,50]
// add element on th front 5
//output :[5,10,20,30,40,50]
// to print console.log()

let arr=[10,20,30,40,50];
let a=arr.length;
let b=new Array(a+1);
b[0]=5;
for(let i=0;i<a;i++){
    b[i+1]=arr[i];
}
console.log(arr);
console.log(b);