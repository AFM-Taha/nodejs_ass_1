const getUsers = require('../util/getUsers')
const fs = require('fs').promises

// Home Page
module.exports.homePage = async (req, res) => {
  res.status(200).send('The server is running')
}

// Random user from json
module.exports.getRandomUser = async (req, res) => {
  const users = await getUsers()
  const randomIndex = Math.floor(Math.random() * 20)
  const randomUser = users[randomIndex]

  res.status(200).send({ success: true, message: 'success', data: randomUser })
}

// All users from json
module.exports.getAllUsers = async (req, res) => {
  const users = await getUsers()

  res.status(200).send({
    success: true,
    message: 'success',
    data: users,
  })
}

// Save an users in json
module.exports.saveAUser = async (req, res) => {
  const users = await getUsers()

  const newUser = req.body

  fs.writeFile(
    './public/user.json',
    JSON.stringify([...users, newUser], null, 2),
    (err) => {
      console.log(err)
    }
  )
  res.send(newUser)
}

// Update an users in json
module.exports.updateAnUser = async (req, res) => {
  const { body, query } = req
  const users = await getUsers()
  const userId = Number(query.id)
  const updatedData = body

  const updatedUsers = users.map((user) => {
    if (user.id === userId) {
      return { ...user, ...updatedData }
    } else {
      return user
    }
  })

  if (updatedUsers) {
    fs.writeFile(
      './public/user.json',
      JSON.stringify(updatedUsers, null, 2),
      (err) => {
        console.log(err)
      }
    )
  }

  res.send(updatedData)
}
//Update Bulk User in json
module.exports.updateBulkUser = async (req, res) => {
  const { body } = req
  const users = await getUsers()

  const updatedUsers = await users.map((user) => {
    const isExist = body.find((u) => user.id === u.id)
    if (isExist) {
      return { ...user, ...isExist }
    } else return user
  })

  if (updatedUsers) {
    await fs.writeFile(
      './public/user.json',
      JSON.stringify(updatedUsers, null, 2),
      (err) => {
        console.log(err)
      }
    )
  }

  res.status(200).send({
    success: true,
    message: 'success',
  })
}

// Delete an users in json
module.exports.deleteAnUser = async (req, res) => {
  const { query } = req
  const users = await getUsers()
  const userId = Number(query.id)
  const updatedUsers = await users.filter((user) => user.id !== userId)

  if (updatedUsers) {
    fs.writeFile(
      './public/user.json',
      JSON.stringify(updatedUsers, null, 2),
      (err) => {
        console.log(err)
      }
    )
  }

  res.status(200).send({
    success: true,
    message: 'success',
  })
}
