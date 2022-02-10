// Import packages
import express, { json, urlencoded } from 'express'
import morgan from 'morgan'
import router from './routes/index.routes.js'
// App
const app = express()
let port = process.env.PORT || 3000
// Morgan
app.use(morgan('tiny'))
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(router)
// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello Cool' })
})
// Starting server
app.listen(port)

export { app }; // for testing