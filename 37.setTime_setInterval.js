document.write("hello");

const sum = (a, b, c) =>{
    console.log("Yes I am running" + (a + b + c))
    a + b + c
}
setTimeout(sum, 1000, 2, 7, 18)

let a = setInterval(function (){
    alert("setInteval")
}, 3000 )

clearTimeout(a)


// let a = setTimeout((funciton) => {
//     alert("I am inside of settimieout")
// }, 5000);


// let b = prompt("Do you want to run the setTimeOut")
// if("n" == b){
//     clearTimeout(a)
// }
// console.log(a)