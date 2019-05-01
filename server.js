const express = require('express')
const app = express()
const methodOverride = require('method-override')

//imports Routes
const saveTipsRoutes = require('./routes/saveTipsRoutes.js')
const greenWaysRoutes = require('./routes/greenWaysRoutes.js')
const participantRoutes = require('./routes/participantRoutes.js')

//sets up hbs
app.set('view engine', 'hbs');
//links public folder
app.use('/public', express.static("public"))

//sets up middleware for handling html forms
app.use(express.urlencoded())
app.use(express.json())
app.use(methodOverride('_method'))

//base for model routes
app.use('/participants', participantRoutes)
app.use('/greenWays', greenWaysRoutes)
app.use('/saveTips', saveTipsRoutes)

//enables local host or heroku hosting
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server has started")
})