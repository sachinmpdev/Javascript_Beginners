const createToDo = async(todo) =>{
    let options = {
        method : "POST",
        headers : {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(todo),
    }

    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = p.json()
    return response
}


    const getToDo = async(id) =>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
        let r = await response.json()
        return r
    }

    const mainFunc = async () =>{
        let todo = {
            title : 'Harry',
            body : 'bhai',
            id : 1100,
        }
        let todor = await createToDo(todo)
        console.log(todo)
        console.log(await getToDo(101))
    }

    mainFunc()