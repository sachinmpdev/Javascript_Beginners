/****************************** */
// Example - 1 //*
// class RailwayForm{
//     submit(){
//         alert("Form Submitted")
//     }
//     cancel(){
//         alert("This Form is Cancelled")
//     }
// }

// let sachin = new RailwayForm()
// let sanjay = new RailwayForm()

// sachin.submit()
// sanjay.submit()
// sanjay.cancel()


/******************************* */
// Example - 2
// class RailwayForm{
//     submit(){
//         alert("Form Submitted")
//     }
//     cancel(){
//         alert("This Form is cancelled")
//     }
//     fill(givename){
//         this.name=givename
//     }
// }

// let sachinForm = new RailwayForm()
// sachinForm.fill("sachin",145316)

// let sanjanaForm1 = new RailwayForm()
// let sanjanaForm2 = new RailwayForm()

// sachinForm.fill("sachin", 2224201)
// sachinForm.fill("sachin", 2229211)

// sachinForm.submit()
// sanjanaForm1.submit()
// sanjanaForm2.submit()
// sanjanaForm1.cancel()

/******************************* */
// Example - 3

class RailwayForm{
    submit(){
        alert(this.name + ": : Your form is submittd for train number:" + this.trainno) 
    }
    cancel(){
        alert(this.name + ": This form is cancelled for train number:" + this.trainno)
    }
    fill(givename, trainno){
        this.name=givename
        this.trainno=trainno
    }
}

let sachinForm = new RailwayForm()
sachinForm.fill("sachin",145316)

let sanjanaForm1 = new RailwayForm()
let sanjanaForm2 = new RailwayForm()

sanjanaForm1.fill("Sanjana", 222452)
sanjanaForm2.fill("sachin", 222922)

sachinForm.submit()
sanjanaForm1.submit()
sanjanaForm2.submit()
sanjanaForm1.cancel()