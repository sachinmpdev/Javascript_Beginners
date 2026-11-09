/*******************/
/*

// Example-1
let arr1 = [3, 5, 8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3){
    return v1+v2+v3
}
console.log(sum(...arr1))

*/

/************************/
// Example-2
let obj2 = {
    name : "Sachin",
    company : "abc",
    address : "xyz",
}
// console.log({...obj2, name:"SANJANA",company : "PQR", address : "qqq"})
console.log({name:"Jhon", company:"Swathi", ...obj2})
