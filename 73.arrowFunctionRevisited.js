// const sayHello = () =>{
//     console.log("Hello")
// }
// sayHello()

// const sayHello = () => console.log("Hello"); console.log("Hi");
// sayHello()

// const sayHello = (name) => console.log("Hello " + name)
// sayHello("sachin")


// const sayHello = name => console.log("Hello " + name)
// sayHello("Harry")

// const sayHello = (name, greeting) => console.log(greeting + "" + name)
// sayHello("Sachin", "Good Afternoon")

// const x = {
//     name : "sachin",
//     role : "Js Developer",
//     exp : 30,
//     show : function(){
//         console.log(`The name is ${this.name} \n The role is ${this.role}`)
//     }
// }
// // sayHello("Sachin", "Good Afternoon")
// console.log(x.name, x.exp)
// x.show()

// const x = {
//     name : "Sachin",
//     role : "Js Developer",
//     exp : 8,
//     show : function(){
//         let that = this
//         console.log(this)
//         setTimeout(function(){
//             console.log(`The name is ${that.name} \n The role is ${that.role}`)
//         },2000)
//     }
// }
// x.show()


// const x ={
//     name : "Sachin",
//     role : "JS Developer",
//     exp : 30,
//     show : function(){
//         let that = this 
//         console.log(this)
//         setTimeout(()=>{
//             console.log(`The name ${this.name} \n The role is ${that.role}`)
//         },2000)
//     }
// } 
// x.show()

const sayHello = name =>{
    console.log("Greeting" + "" + name)
    console.log("Hi")
}

const x = {
    name : "Sachin",
    role : "JS Developer",
    exp : 30,
    show : function sayHello(){
        let that = this
        console.log(this)
        setTimeout(()=>{
            console.log(`the name is ${this.name} \n The role is ${this.role}`)
        },2000)
     }
}
sayHello("Harry", "Good Afternoon")

