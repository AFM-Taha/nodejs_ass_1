const fs = require('fs').promises

const getUsers = async () => {
  try {
    const parsedUsers = await fs.readFile('./public/user.json', 'utf8')
    const users = JSON.parse(parsedUsers)
    return users
  } catch (err) {
    console.log(err)
  }
}

module.exports = getUsers
