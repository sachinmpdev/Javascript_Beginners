class Employee{
    login(){
        console.log("Employee has logged in");
    }
    logout(){
        console.log("Employee had loogout");
    }

    requestLeaves(leaves){
        console.log(`Employee had requested ${leaves} leaves`)
    }
}

// class programmer extends Employee{
//     requestCoffee(x){
//         console.log(`Employee has resquested ${x} coffee`)
//     }
// }

class programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested $(x) coffees`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves + 1 } leaves(one extra)`)
    }
}

let e = new Employee()
e.login()
e.requestLeaves(5)