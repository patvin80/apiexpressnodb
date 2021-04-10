import { Router } from 'express'
const router = Router()
import {router as postRouter} from './post.routes.js' 

router.use('/api/v1/posts', postRouter)

export default router