function pro() {
    var name1 = prompt("Enter your full name :", "abc");

    if (name1 == null || name1 == "") {
        document.getElementById("msg").innerHTML = "You did not entered anything !";
    } else {
        document.getElementById("msg").innerHTML = "Hello " + name1 + "! How are you today ?";
    }
}