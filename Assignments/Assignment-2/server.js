const express = require('express')
const app = express()

app.use('/users', (req, res, next) => {
  console.log('Hello Welcome to Users Page')
  res.send(`
        <h1>Hello Welcome to Users Page</h1>
    `)
})
app.use('/', (req, res, next) => {
  console.log('Hello Welcome to Home Page')
  res.send(`
        <h1>Hello Welcome to Home Page</h1>
    `)
})

app.listen(3000)
