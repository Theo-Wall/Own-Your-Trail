
const cloudinary = require('cloudinary')
require("dotenv").config("./.env"); 

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

exports.uploads = (file,folder) => {
  try {
    return new Promise(resolve => {
      cloudinary.uploader.upload(file, (result) => {
        resolve({
          url: result.secure_url,
          id: result.public_id
        })
      }, {
        resource_type: "auto",
        folder: folder
      })
    })
  } catch (error) {
    console.log('rejected in cloudinary.js', error)
  }
}

 