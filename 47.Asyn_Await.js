async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("27 Degree")
      }, 2000)
    })
  
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("21 Degree")
      }, 5000)
    })
    // delhiWeather.then(alert)
    // bangloreWeather.then(alert)
  
    console.log("Fetching Delhi weather please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather " + delhiW)
  
    console.log("Fetching Bangalore weather please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather " + bangaloreW)
    
    return[delhiW, bangaloreW]
  }
  
  const cherry = async()=>{
    console.log("Hey I am cherry and I am wating")
  }
  
  const main1 =  async() =>{
  console.log("Welcome to weather Control Room")
  let a = await harry()
  let b = await cherry()
   
  }
  main1()