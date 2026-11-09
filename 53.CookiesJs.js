console.log(document.cookie)
document.cookie = "name = sachin1122334400"
document.cookie = "name2 = sachin11223344002"
document.cookie = "name = sachin1100"
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${key}=${value}`
console.log(document.cookie)

// console.log(document.cookie)
// document.cookie = "name=sachin998877"
// document.cookie = "name2=sachin9988772"
// document.cookie = "name=sachin"
// let key = prompt("Enter your key")
// let value = prompt("Enter your value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)

