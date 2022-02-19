const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')

router.get('/add-product', (req, res, next) => {
  console.log('I am add-product middleware')
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'), (err) => {
    if (err) {
      console.log(err)
    }
  })
})

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
