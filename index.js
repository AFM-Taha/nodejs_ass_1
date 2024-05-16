const userRouts = require('./routes/users.routers.js')
const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send(
    `<p style={{fontSize:'40px', color:'red'}}>The server is running, Bro!</p>`
  )
})

app.use('/api/v1/user', userRouts)

app.all('*', (req, res) => {
  res.send('Route not found!')
})

app.listen(PORT)
