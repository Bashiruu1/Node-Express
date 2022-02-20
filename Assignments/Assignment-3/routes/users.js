const express = require('express')
const router = express.Router()
const path = require('path')

const rootDir = require('../util/path')

/**
 * /users
 */
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'), (err) => {
    if (err) {
      console.log(err)
    }
  })
})

module.exports = router
