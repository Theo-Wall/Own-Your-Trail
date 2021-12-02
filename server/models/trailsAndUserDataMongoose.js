// const mongoose = require('./mongooseDb')  // mongooseDb is for access to the localhost database
const mongoose = require('./mongooseDbAtlas.js')  // mongooseDbAtlas.js is for access to the Atlas database

const Trail = mongoose.model('Trail', {     userId: String,                                 // add in required inputs
                                            trailName: String,
                                            photos: [{url: String, description: String}],
                                            trailDescription: String,
                                            trailMap: String,
                                            primaryPhoto: Number,
                                            cityQuadrant: String
                                        })
                                        
const UserData = mongoose.model('UserData', {   "userId": Number,                               // add in required inputs
                                                "userName": {type: String, required: true}
                                            })

const dummyTrail = { //dummy data to test creatTrail function
    "userId": "Theo",
    "trailName": "trail1" ,
    "photos": [{"url": "https://www.google.com/maps/d/thumbnail?mid=1f0DqYdEHXIWs25ACkMNiMZ-Wkpw", "description": "down by the river"}],
    "trailDescription": "I walked this trail every day with my grand pappy and so should you.",
    "trailMap": "turn left at cowboy ave and take a right at lasso st",
    "primaryPhoto": 0,
    "cityQuadrant": "NW"
  }

async function createTrail(trailData) { 
    
    let newTrail = new Trail(trailData)
    let createdTrail = await newTrail.save()
    // console.log('TrailData in mongoose:', createdTrail)
    return createdTrail.id
}

async function createUser(userData) { //write catch block for errors
    let newUser = new UserData(userData)
    let createdUser = await newUser.save()
    return createdUser.id
}
async function getTrailById(id) {
    return Trail.findById(id)
}

// async function findRoomByName(roomName) {
//     return Room.findOne({name: roomName})
// }

async function listTrails() {
    let returnedData = await Trail.find({})
    return (returnedData)
}

async function listUsers() {
    let returnedData = await UserData.find({})
    return (returnedData)
}

// async function mainProgram () {  //for testing Mongoose database access functions
//     let id = await createTrail(dummyTrail)
//     console.log('data written and received from Atlas database:',await getTrailById(id))
// }

// mainProgram ()

module.exports = {
    createTrail,
    createUser,
    getTrailById,
//     findRoomByName,
    listTrails,
    listUsers
}