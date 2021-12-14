const mongoose = require('./mongooseDb')  // mongooseDb is for access to the localhost database
//const mongoose = require('./mongooseDbAtlas.js')  // mongooseDbAtlas.js is for access to the Atlas database

const Trail = mongoose.model('Trail', {     userId: String,
                                            userName: String,                              // add in required inputs
                                            trailName: String,
                                            photos: [{url: String, description: String}],
                                            trailDescription: String,
                                            trailMap: String,
                                            primaryPhoto: Number,
                                            cityQuadrant: String,
                                            trailRating: Number,
                                            numberOfTrailRatings: Number,
                                        })
                                        
const UserData = mongoose.model('UserData', {   "userId": String,                               // add in required inputs
                                                "userName": {type: String, required: true},
                                                "userEmail": {type: String, required: true},
                                                "userPassword": {type: String, required: true},
                                                "userToken": String
                                            })

async function createTrail(trailData) { 
    
    let newTrail = new Trail(trailData)
    let createdTrail = await newTrail.save()
    // console.log('TrailData in mongoose:', createdTrail)
    return createdTrail.id
}

async function createUser(userData) { //write catch block for errors
    let newUser = new UserData(userData)
    let createdUser = await newUser.save()
    createdUser.userId=createdUser.id
    await createdUser.save()
    return (createdUser)
}
async function getTrailById(id) {
    return Trail.findById(id)
}

async function getTrailByFind(key) {
    if (key === "ListAllTrails") {
        
        return Trail.find({});
    }
    else {
        return Trail.find({cityQuadrant: key});
    }
}

async function findUserByEmail(email) {
    return UserData.findOne({userEmail: email})
}

async function update(id, updatedTrail) {
    return Trail.findByIdAndUpdate(id, updatedTrail, {
        returnDocument: 'after',
    })
}

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
    findUserByEmail,
    listTrails,
    listUsers,
    getTrailByFind,
    update,
}