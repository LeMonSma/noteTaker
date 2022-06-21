const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const apiRoutes = require('./routes/apiRoutes')
const noteRoutes = require('./routes/noteRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
app.use('/', noteRoutes)
app.use('/api', apiRoutes)





app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})

