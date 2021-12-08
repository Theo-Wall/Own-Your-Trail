const mongoose = require('mongoose')

const dbUrl = process.env.MONGO_URI //|| 'mongodb://localhost:27017/c7Project2Mongoose'
mongoose.connect(dbUrl)

module.exports = mongoose
