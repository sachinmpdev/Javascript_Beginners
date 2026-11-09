class Employee{
    constructor(name){
        console.log(`${name} - Employee's  constructor is here`)
        this.name= name
    }

    login(){
    console.log(`Employee has logged in`)
    }

    logout(){
    console.log(`Employee has loggout`)
    }
    
    requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves - auto approved`);
    }
}

class programmer extends Employee{
    constructor(name){
        super(name)
        console.log(`This is a newly written constructor`)
    }

    requestCoffee(x){
    console.log(`Employee has requested ${x} coffee`)
    }

    requestLeaves(leaves){
    super.requestLeaves(4)
    console.log("One Extra is granted")
    }
}

let e = new programmer("Sachin")
e.login()
e.requestLeaves(3)