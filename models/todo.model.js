import fetch from 'isomorphic-fetch'

const getTodos = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
    let todos = await response.json()
    if (todos.length === 0) {
        reject({
            message: 'no todos available',
            status: 202
        })
    }
    return (todos)
}

const getTodo = async (id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    let todo = await response.json()
    if (!todo.id) {
        throw({
            message: 'Todo is not available',
            status: 404
        })
    }
    return (todo)
}

export {getTodos, getTodo}