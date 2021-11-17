const express = require('express')
const hideAndSeekRouter = require('./routes/hideAndSeekRoutes')
const matchRouter = require('./routes/matchRoutes')

const app = express()
const port = 3000

app.use('/v1',hideAndSeekRouter)
app.use('/v2',matchRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

