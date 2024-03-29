const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const rootDir = require('./util/path')

/**
 * Body Parser extracts body portion of incoming request stream and exposes it in req.body
 */
app.use(bodyParser.urlencoded({ extended: false }))

/**
 * Allows me to serve static files such as .js or .css
 */
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(rootDir, 'views', 'page-not-found.html'), (err) => {
      if (err) {
        console.log(err)
      }
    })
})

app.listen(3000)
