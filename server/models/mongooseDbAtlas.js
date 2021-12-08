const mongoose = require('mongoose')

const credentials = './models/atlasCertificate.pem'  //attach your atlas certificate to the models directory and rename it to atlasCertificate.pem
// const database='c7Project2Mongoose'

const uri = process.env.MONGO_URI
// const uri = 'mongodb+srv://cluster0.vmoqm.mongodb.net/'+database+'?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority'

// const dbUrl = 'mongodb://localhost:27017/c7Project2Mongoose'

mongoose.connect(uri, {
    sslKey: credentials,
    sslCert: credentials
})

module.exports = mongoose
