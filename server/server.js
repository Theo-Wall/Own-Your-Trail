const express = require('express')
const trailAndUserRouter = require('./routes/trailAndUserRoutes')

const app = express()
const port = 5001

app.use('/api',trailAndUserRouter)
app.use('/', express.static('../client/build'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

