import { Router } from 'express'
const router = Router()
import {postRouter} from './post.routes.js' 
import {todoRouter} from './todo.routes.js' 

router.use('/api/v1/posts', postRouter)
router.use('/api/v1/todos', todoRouter)

export default router