const express = require('express')

const router = express.Router()

const addUser = require('../controller/userController')

router.post('/addUser', addUser)

module.exports = router

