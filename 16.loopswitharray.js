//loopswitharray
let num = [3, 54, 1, 2, 4]
for(let i=0; i<num.length; i++)
{
    console.log(num[i])
}
num.forEach((element)=>{
    console.log(element * element)
})

//Array.from
let name = "Sachin"
let arr = Array.from(name)
console.log(arr)

// for..of loop
for(let i of name){
    console.log(i)
}

// for..in loop
for(let i in num){
    console.log(i)
}
for(let i in num){
    console.log(num[i])
}

// Map array
let arr1 = [45, 23, 21]
let arr2 = arr1.map((value,index) =>{
    console.log(value,index)
    return value + 1
})
console.log(arr2)

let arr3 = [45, 23, 21]
let b = arr3.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})
console.log(b)



