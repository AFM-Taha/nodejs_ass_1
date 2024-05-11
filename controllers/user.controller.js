const users = require('../public/user.json')

// Random user from json
module.exports.getRandomUser = (req, res) => {
  const randomIndex = Math.floor(Math.random() * 20)
  const randomUser = users[randomIndex]
  res.status(200).send({ success: true, message: 'success', data: randomUser })
}

// All users from json
module.exports.getAllUsers = (req, res) => {
  res.status(200).send({
    success: true,
    message: 'success',
    data: users,
  })
}
