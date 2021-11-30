const mongoose = require('./mongooseDb')

const Trail = mongoose.model('Trail', {     userId: String,                                 // add in required inputs
                                            trailName: String,
                                            photos: [{url: String, description: String}],
                                            trailDescription: String,
                                            trailMap: String,
                                            primaryPhoto: Number
                                        })
                                        
const UserData = mongoose.model('UserData', {   "userId": Number,                               // add in required inputs
                                                "userName": {type: String, required: true}
                                            })


async function createTrail(trailData) { 
    
    let newTrail = new Trail(trailData)
    let createdTrail = await newTrail.save()
    console.log('TrailData in mongoose:', createdTrail)
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

module.exports = {
    createTrail,
    createUser,
    getTrailById,
//     findRoomByName,
    listTrails,
    listUsers
}