const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('I am in first middleware')
  res.send('<h1>Hello from express</h1>')
  next()
})

app.listen(3000)
