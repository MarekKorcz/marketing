const express = require('express')
const app = express()

const path = require('path')

require('dotenv').config()
const PORT = process.env.PORT

app.set('view engine', 'ejs')

const mainRoutes = require('./routes/main')
app.use('/', mainRoutes)

// // Set static folder
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
