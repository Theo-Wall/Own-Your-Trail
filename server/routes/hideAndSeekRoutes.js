const hideAndSeek = require('../model/hideAndSeek')

const express = require('express')
const router = express.Router()

router.get('/startGame', async (req, res) => {
    await hideAndSeek.startGame()
    res.send('The hider has found a new spot to hide!\nGood Luck!\n')
})

router.get('/listRooms', async (req, res) => {
    res.json(await hideAndSeek.listRooms())
})

router.get('/move', async (req, res) => {
    let room = req.query.room 
    hideAndSeek.move(room)
    res.send('You have moved to the ' + room + '\n')
})

router.get('/look', (req, res) => {
    let seekerLocation = hideAndSeek.look()
    let message = 'You are in the ' + seekerLocation.name + '\n'
    message += 'Obvious hiding places are:\n'
    seekerLocation.hidingSpots.forEach((hidingSpot) => {
        message += '  ' + hidingSpot + '\n'
    })
    res.send(message)
})

router.get('/search', (req, res) => {
    let message
    let spot = req.query.spot  
    let found = hideAndSeek.search(spot)
    if (found) {
        message = 'You just found the hider!'
    }
    else {
       message = 'You search ' + spot + ' and find no-one!'
    }
    res.send(message + '\n')
})

router.get('/', (req, res) => {
    let instructions = 
`Welcome to Hide and Seek!
    You are the seeker, to start a new game visit the /startGame endpoint.
    Once there you can list the rooms you can search by visiting /listRooms.
    Use "/move?room=room+name" to move to a particular room
    Use "/look" to case out the room for hiding spots
    Use "/search?spot=hiding+spot" to search in the room you are in...
Good Luck!
`
    res.send(instructions)
})


module.exports = router
