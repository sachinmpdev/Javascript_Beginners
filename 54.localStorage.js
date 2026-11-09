// console.log(localStorage.setItem("name","sachin1"))
// console.log(localStorage.setItem("name1","sachin2"))
// console.log(localStorage.setItem("name2","sachin3"))
// console.log(localStorage.setItem("name3","sachin4"))
// console.log(localStorage.setItem("name4","sachin5"))
// console.log(localStorage.setItem("name5","sachin6"))
// console.log(localStorage.setItem("name6","sachin7"))
// console.log(localStorage.setItem("name7","sachin8"))


let key = prompt("Enter key you want to set")
let value = prompt("Enter key you want to set")
localStorage.setItem(key,value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
if(key == "red" || key == "blue")
{
    localStorage.removeItem(key)
}
if(key==0){
    localStorage.clear()
}