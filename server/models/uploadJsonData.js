const databaseCalls =require ('./trailsAndUserDataMongoose')
const trailsData = require('./trails.json')
const usersData = require('./users.json')


const loadUsers = false // set to true to upload the users.json file to the Atlas database
const loadTrailsData = false  // set to true to upload the trails.json file to the Atlas database
 
async function uploadTrails (trailsData) {
    trailsData.forEach(async (trail) => {
        console.log('Creating trail:', trail.trailName)
        let createdId = await databaseCalls.createTrail(trail)
        console.log('... created with id', createdId)
    })
}

async function uploadUsers (usersData) {
    usersData.forEach(async (user) => {
        console.log('Creating user:', user.userName)
        let createdId = await databaseCalls.createUser(user)
        console.log('... created with id', createdId)
    })
}

async function uploader (loadUsers, usersData, loadTrailsData, trailsData) {
    if (loadUsers) {
        await uploadUsers(usersData)
        console.log (await databaseCalls.listUsers())
    }
    if (loadTrailsData) {
        await uploadTrails (trailsData)
        console.log (await databaseCalls.listTrails())
    }
}

//Main uploader call

uploader (loadUsers, usersData, loadTrailsData, trailsData)