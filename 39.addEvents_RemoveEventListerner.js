// let x = function(e){
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.clientX)
//     console.log(event.clientY)
//     alert("Hello World!")
// }
// btn.addEventListener('click', x)


// let y = function(e){
//     console.log(event.target)
//     console.log(event.type)
//     console.log(event.clientX)
//     console.log(event.clientY)
 
//     alert("Hello World2!")
// }

// btn.addEventListener('Click', y)


// if(a == "2")
// {
//     btn.removeListner('click', x)
// }


let x = function(e){
    alert('Hello World1')
};
let y = function(e){
    alert('Hello World2')
}
btn.addEventListener('click', x)
btn.addEventListener('click', y)

 

let a = prompt("What is your favorite number ?");
if( a == "2"){
    btn.removeEventListener('click', x)  
}
