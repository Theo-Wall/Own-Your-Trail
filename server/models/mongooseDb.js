const mongoose = require('mongoose')
require("dotenv").config("../.env"); 

const dbUrl = process.env.MONGO_URI

mongoose.connect(dbUrl)

module.exports = mongoose
