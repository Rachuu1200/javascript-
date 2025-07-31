const prompt = require('prompt-sync')();
let arr=[1,234,5,78,90,89];
let a;
do {
    a= prompt("Enter the number")
    a= Number.parseInt(a)
    arr.push(a)
    console.log(a)
}
while(a!=0);
console.log(arr)