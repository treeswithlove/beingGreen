const express = require('express')
const app = express()
const methodOverride = require('method-override')

//imports Routes
const saveTipsRoutes = require('/routes/saveTipsRoutes.')
const greenWaysRoutes = require('/routes/greenWaysRoutes.js')
const participantRoutes = require('/routes/greenWaysRoutes.js')

//sets up hbs
app.set('view engine', 'hbs');
app.use(express.static(_dirname+"/public"));

//sets up middleware for handling html forms
app.use(express.urlencoded())
app.use(express.json())
app.use(methodOverride('_method'))

//base for model routes
app.use('/participants', participantRoutes)
app.use('/waystobegreen', greenWaysRoutes)
app.use('/savingTips', saveTipsRoutes)

//enables local host or heroku hosting
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server has started")
})