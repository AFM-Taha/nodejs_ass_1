const userRouts = require('./routes/users.routers.js')
const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()

app.use(express.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { message: 'The server is running, Bro!' })
})

app.use('/api/v1/user', userRouts)

app.all('*', (req, res) => {
  res.send('Route not found!')
})

app.listen(PORT)
