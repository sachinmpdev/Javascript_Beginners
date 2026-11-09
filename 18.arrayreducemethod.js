// //Array reduce method

// let arr = [1, 2, 3, 5, 2, 1]
// let newarr = arr.reduce((h1, h2) =>{
//     return h1+h2
// })
// console.log(newarr)

let arr = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr = arr.reduce(reduce_func)
console.log(newarr)