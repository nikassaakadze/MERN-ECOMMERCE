const User = require('../models/Users')

const addUser = (req, res) => {
  userName = req.body.userName,
  email = req.body.email,
  password = req.body.password

  const newUser = new User({userName, email, password})
  newUser.save()
  .then(() => res.json(`User ${userName} added`))
  .catch(err => res.status(400).json("Error" + err))
}

module.exports = addUser