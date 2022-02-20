const express = require('express')
const app = express()
const path = require('path')

const rootDir = require('./util/path')
const userRoute = require('./routes/users')

app.use(express.static(path.join(__dirname, 'public')))

/**
 * Users Route
 */
app.use('/users', userRoute)

/**
 * Home Page
 */
app.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

/**
 * 404 - Page Not Found
 */
app.use((req, res, next) => {
  console.log(rootDir)
  res.sendFile(path.join(rootDir, 'views', 'page-not-found.html'))
})
app.listen(3000)
