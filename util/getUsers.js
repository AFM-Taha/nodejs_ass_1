const fs = require('fs').promises

const getUsers = async () => {
  try {
    const parsedUsers = await fs.readFile('/user.json', 'utf8')
    const users = JSON.parse(parsedUsers)
    console.log('hello users hello', users)
    return users
  } catch (err) {
    console.log(err)
  }
}

module.exports = getUsers
