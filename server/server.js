const express = require('express')
let cors = require("cors")
const trailAndUserRouter = require('./routes/trailAndUserRoutes')
const bodyParser = require('body-parser')
const app = express()
const port = 5001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors({
  origin: true,
  methods: ["GET", "POST"],
  credentials: true,
}))
app.use('/api',trailAndUserRouter)
app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

