// sessionstorage.getItem("name")
// sessionstorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name","harry")
// sessionStorage.removeItem("name")

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
  }