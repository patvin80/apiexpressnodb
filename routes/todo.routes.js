import { Router } from 'express'
const todoRouter = Router()
import { getTodos, getTodo } from '../models/todo.model.js'
import { mustBeInteger } from '../helpers/middlewares.js'

/* All posts */
todoRouter.get('/', async (req, res) => {
    await getTodos()
    .then(todos => res.json(todos))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* A post by id */
todoRouter.get('/:id', mustBeInteger, async (req, res) => {
    const id = req.params.id

    await getTodo(id)
    .then(todo => res.json(todo))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})


export { todoRouter }