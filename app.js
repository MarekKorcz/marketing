const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

const mainRoutes = require('./routes/main')
app.use('/', mainRoutes)

const blogRoutes = require('./routes/blog')
app.use('/blog', blogRoutes)

require('dotenv').config()
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))