const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('In Home Directory')
  res.send(`
    <h1>Welcome to Home Directory</h1>
  `)
})

module.exports = router
