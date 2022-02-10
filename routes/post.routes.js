import { Router } from 'express'
const postRouter = Router()
import { getPosts, getPost, insertPost, updatePost, deletePost } from '../models/post.model.js'
import { mustBeInteger, checkFieldsPost } from '../helpers/middlewares.js'

/* All posts */
postRouter.get('/', async (req, res) => {
    await getPosts()
    .then(posts => res.json(posts))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* A post by id */
postRouter.get('/:id', mustBeInteger, async (req, res) => {
    const id = req.params.id

    await getPost(id)
    .then(post => res.json(post))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* Insert a new post */
postRouter.post('/', checkFieldsPost, async (req, res) => {
    await insertPost(req.body)
    .then(post => res.status(201).json({
        message: `The post #${post.id} has been created`,
        content: post
    }))
    .catch(err => res.status(500).json({ message: err.message }))
})

/* Update a post */
postRouter.put('/:id', mustBeInteger, checkFieldsPost, async (req, res) => {
    const id = req.params.id

    await updatePost(id, req.body)
    .then(post => res.json({
        message: `The post #${id} has been updated`,
        content: post
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

/* Delete a post */
postRouter.delete('/:id', mustBeInteger, async (req, res) => {
    const id = req.params.id

    await deletePost(id)
    .then(post => res.json({
        message: `The post #${id} has been deleted`
    }))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        }
        res.status(500).json({ message: err.message })
    })
})

export { postRouter }