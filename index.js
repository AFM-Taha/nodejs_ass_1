const userRouts = require('./routes/users.routers.js')
const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()

app.use(express.json())

app.use('/api/v1/user', userRouts)

app.all('*', (req, res) => {
  res.send('Page not found!')
})

app.listen(PORT)
