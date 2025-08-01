const numbers = [45,4,9,16,25];

let text = "";
for (let x in numbers){
    text += numbers[x] +"\n";
}
console.log(text)

let obj = {
    rachana:90,
    rohan:45,
    sita:34,
    rubi:38,
    silu:40,
}
for(let a in obj){
    console.log("Marks of " +a + " are " + obj[a])
}