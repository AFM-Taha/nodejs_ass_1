const users = require('../public/user.json')

module.exports.getRandomUser = (req, res) => {
  const randomIndex = Math.floor(Math.random() * 20)
  const randomUser = users[randomIndex]
  res.status(200).send(randomUser)
}
