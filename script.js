console.log("Hello World");

let value = 6;
let a = value + 5;
{
    let value = 7;
    console.log("Inside block, value is "+value+".");
}
console.log("Outside block, the value is "+value+".");