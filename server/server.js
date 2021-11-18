const express = require('express')
const trailAndUserRouter = require('./routes/trailAndUserRoutes')

const app = express()
const port = 5000

app.use('/api',trailAndUserRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

