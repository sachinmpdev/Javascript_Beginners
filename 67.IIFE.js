// let a = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(456)
//         },40000)
//     })
// }

// let b = await a
// let c = await a
// let d = await a
// console.log(b, c, d)



let a = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(456)
        },4000)
    })
}

(async()=>{
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})()