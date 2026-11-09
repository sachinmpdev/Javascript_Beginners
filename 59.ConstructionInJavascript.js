class RailwayForm{
    constructor(givenname,trainno,address){
        console.log("CONSTRUCTOR CALLED..." + givenname + " " + trainno)
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }

    preview(){
        alert(this.name + ": Your form is for train number: " + this.trainno + "and your address is" + this.address)
    }

    submit(){
        alert(this.name + ": Your form is submitted for trian number :" + this.trainno)
    }
    
    cancel(){
        alert(this.name + ": This form is Cancelled for train number:" + this.trainno)
        this.trainno = 0
    }
}

let sachinForm = new RailwayForm("Sachin", 123456,"DVG-577006" )

sachinForm.preview()
sachinForm.submit()
sachinForm.cancel()
sachinForm.preview()