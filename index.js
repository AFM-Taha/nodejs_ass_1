const userRouts = require('./routes/users.routers.js')
const express = require('express')
const app = express()
const PORT = 8080

app.use('/api/v1/user', userRouts)

app.all('*', (req, res) => {
  res.send('Page not found!')
})

app.listen(PORT)
