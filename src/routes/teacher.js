const express = require('express')
const multer = require('multer')
const uploadConfig = require('../config/upload')

const routes = express.Router()
const upload = multer(uploadConfig)

module.exports = routes