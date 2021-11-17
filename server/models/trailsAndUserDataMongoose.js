const mongoose = require('./mongooseDb')

const Trail = mongoose.model('Trail', {   "userId": Number,
                                            "trailName": String,
                                            "photos": [String],
                                            "trailDescription": String,
                                            "trailMap": String
                                        })
                                        
const UserData = mongoose.model('UserData', {   "userId": Number,
                                                "userName": String
                                            })


async function createTrail(trailData) {
    let newTrail = new Trail(trailData)
    console.log (newTrail)
    let createdTrail = await newTrail.save()
    return createdTrail.id
}

async function createUser(userData) {
    let newUser = new UserData(userData)
    console.log (newUser)
    let createdUser = await newUser.save()
    return createdUser.id
}
// async function findRoomById(id) {
//     return Room.findById(id)
// }

// async function findRoomByName(roomName) {
//     return Room.findOne({name: roomName})
// }

async function listRooms() {
    return Room.find({})
}

createUser ({"userId": 1235,
"userName": 'Dustin and Reza'});

// module.exports = {
//     createRoom,
//     findRoomById,
//     findRoomByName,
//     listRooms
// }