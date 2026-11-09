// Prompt and alert Work in js
/*let a = prompt("Hey Whats you age?")
console.log(a)
console.log(typeof a)
alert("sachin")*/


// If Condition
/*
let a = prompt("Hey Whats you age?")
a = Number.parseInt(a)
console.log(typeof a)
if(a > 0)
{
    alert("This is a valid age?")
}
*/    

// If else Condition
// let a = prompt("Hey Whats you age?")
// a = Number.parseInt(a)
// if(a>0){
//     alert("This is a valid age");
// }else{
//     alert("This is an invalid age")
// }

//If else if else
let a = prompt("hey what you age?")
a = Number.parseInt(a);
if(a < 0){
    alert("This is an invalid age");
}else if(a < 9){
    alert("Your are a kid and you connot even think of driving");
}else if(a < 18 && a >= 9){
    alert("You are a kid and you can think of driving after 18");
}else{
    alert("You can now drive as you are abouve 18");
}
console.log("Done")
console.log("You can now drive as you are aboove 18");

console.log("You can",(a<18 ? "Not drive" : "drive" ))








