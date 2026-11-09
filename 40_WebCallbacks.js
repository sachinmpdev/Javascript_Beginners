// Synchronous programming

/*let a = prompt("What is your name ?");
let b = prompt("What is your age ?");
let c = prompt("What is your favorite color?");
console.log(a + "is" + b + "Years old and has" + c + "favorite");*/

// // ASynchronous programming
// console.log('start')
// setTimeout(function(){
//     console.log("Hey I am Good");
// },3000)
// console.log("End")

function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
      console.log("Loaded scripit with SRC:" + src)
      callback(null,src);
    }
    script.oneError = function(){
      console.log("Error loading script with SRC:" + src);
      callback(new Error("src got some error"));
    }
    document.body.appendChild(script);  
  }
  
  function hello(error, src){
    if(error){
      console.log(error)
      return
    }
    alert('Hello World!' + src);
  }
  
  function goodmorning(error,src){
      if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return
      }
      alert('Good Morning' + src);
    }
  
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", goodmorning)