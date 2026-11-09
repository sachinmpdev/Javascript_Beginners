class Animal{
    constructor(name){
        this._name = name
    }

    fly(){
        console.log("God is Greate")
    }
    getname(){
        return this_name
    }
    setname(newName){
        this._name = newName
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Eating Carrot")
    }
}

let a = new Rabbit("Sachin")
a.fly()
console.log(a.name)
a.name = "Sanjana"
console.log(a.name)
 let c = 56
 console.log(a instanceof Animal)
 console.log(a instanceof Rabbit)
 console.log(c instanceof Animal)
