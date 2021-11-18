const {createTrail,createUser,listTrails,listUsers} = require('../models/trailsAndUserDataMongoose')

const express = require('express')
const router = express.Router()

const dummyTrail = {
    "userId": 1,
  "trailName": "trail1" ,
  "photos": ["https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw"],
  "trailDescription": "I walked this trail every day with my grand pappy and so should you.",
  "trailMap": "turn left at cowboy ave and take a right at lasso st"

    // userId: 1,
    // trailName: "trail1" ,
    // photos: ["https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw"],
    // trailDescription: "I walked this trail every day with my grand pappy and so should you.",
    // trailMap: "turn left at cowboy ave and take a right at lasso st"
  }

const dummyUser = {
    userId: 1,
    userName: "Theo"
  }

router.get('/createTrail', async (req, res) => {
    let trailInfo = dummyTrail //req.query.trailFormData
    console.log (trailInfo)
    newId = await createTrail(trailInfo)
    console.log (trailInfo)
    returnedString = 'go check the database for the new Trail ID: '+newId
    res.send(returnedString)
})

router.get('/createUser', async (req, res) => {
    let userInfo = dummyUser //req.query.userFormData
    newId = await createUser(userInfo)
    returnedString = 'go check the database for the new User ID: '+newId
    res.send(returnedString)
})

router.get('/listTrails', async (req, res) => {
    res.json(await listTrails())
})

router.get('/listUsers', async (req, res) => {
    res.json(await listUsers())
})


module.exports = router
