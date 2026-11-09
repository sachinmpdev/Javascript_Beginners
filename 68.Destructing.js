// let arr = [3, 5]
// let [a, b] = arr
// console.log(a, b)

/*or*/

// let arr = [3, 5]
// let [a, b] = arr
// let a1 = arr[0]
// let b2 = arr[1]
// console.log(a1,b2)



// let arr = [3,5]
// let [a, b] = arr
// console.log(a,b)

/*or*/

// let arr=[3,5,8]
// let [a,b,c] = arr
// console.log(a, b, c)




// let arr = [3, 5, 8]
// let [a, b, c, d] = arr
// console.log(a,b,c,d)

/*or*/

// let arr = [3, 5, 8, 9, 12, 14]
// let [a, b, c, d] = arr
// console.log(a, b, c, d)




// let arr = [3, 5, 8, 9, 12, 14]
// let [a, b, c, d, ...rest] = arr
// console.log(a, b, c, d, rest)

/*or*/

// let arr = [3, 5, 8, 9, 12, 14]
// let a = arr[0]
// let [a1, b, c, d, ...rest] = arr
// console.log(a1, b, c, d, rest)
// let [a2, b2, c2, d2, res2] = arr
// console.log(a, rest)



let arr = [3, 5, 8, 9, 12, 14]
let [a, , b, ...rest] = arr
console.log(a, b, rest)
