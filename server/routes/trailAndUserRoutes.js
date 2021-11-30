const {createTrail,createUser,listTrails,listUsers,getTrailById} = require('../models/trailsAndUserDataMongoose')
const cloudinary = require("../utils/cloudinary")
const upload = require("../utils/multer")
const fs = require('fs')
const express = require('express')
const router = express.Router()

// const storage = multer.memoryStorage({
//     destination: function (req, files, callback) {
//         callback(null, "");
//     },
// });
// let multipleUpload = multer({ storage: storage }).array("image")



const dummyTrail = {
    "userId": 1,
  "trailName": "trail1" ,
  "photos": ["https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw"],
  "trailDescription": "I walked this trail every day with my grand pappy and so should you.",
  "trailMap": "turn left at cowboy ave and take a right at lasso st"

  }

const dummyUser = {
    userId: 1,
    userName: "Theo"
  }

router.post('/createTrail', async (req, res) => { //per Tony's Nov 24 video should be a post not a get
    let trailInfo = req.body
    newId = await createTrail(trailInfo)
    returnedString = 'go check the database for the new Trail ID: '+ newId
    res.send(returnedString)
})

router.post('/addImage', upload.array('image'), async (req, res) => {
    try {
        const uploader = async (path) => await cloudinary.uploads(path, 'images')
        
        if(req.method === 'POST') {
            const urls = []
    
            const files = req.files
            // res.send(files)
            for (const file of files) {
                const { path } = file
            
                const newPath = await uploader(path)
            
                urls.push(newPath)
            
                fs.unlinkSync(path)
            }

            res.send({
                message: 'Images Uploaded Successfully',
                data: urls
            })
        } else {
            res.send.json()({
                err: 'Upload Failed'
            })
        }
    } catch (error) {
        console.log('rejected in routes', error)
    }
    })

router.get('/createUser', async (req, res) => {
    let userInfo = dummyUser //req.query.userFormData
    newId = await createUser(userInfo)
    returnedString = 'go check the database for the new User ID: '+ newId
    res.send(returnedString)
})

router.get('/listTrails', async (req, res) => {
    res.json(await listTrails())
})

router.get('/getTrailInfo/:id', async (req, res) => {
    let trailId = req.params.id
    console.log('we made it into the getTrailById API endpoint', trailId)
    res.json(await getTrailById(trailId))
})

router.get('/listUsers', async (req, res) => {
    res.json(await listUsers())
})


module.exports = router
