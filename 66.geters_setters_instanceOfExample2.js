class Animal{ 
    constructor(name){
        this._name = name
    }
    fly(){
        alert("Hi Sachin How Are You.?")
    }
    get Name(){
        return this.name
    }
}

let a = new Animal()
a.fly()
console.log(a.name)
a.name="sachin"
console.log(a.name)
console.log(a instanceof Animal)

let c = 56
console.log(c instanceof Animal)