const express = require('express')
const path = require("path")
const trailAndUserRouter = require('./routes/trailAndUserRoutes')
const bodyParser = require('body-parser')
let cors = require("cors")


const app = express()
const port = process.env.PORT || 5001;


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
// app.use("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// })

app.listen(port, () => {
  console.log(`Example app listening at port:${port}`)
})

