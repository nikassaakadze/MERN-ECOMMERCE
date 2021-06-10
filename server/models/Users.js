const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  userName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
})

const User = mongoose.model("users", userSchema)

module.exports = User