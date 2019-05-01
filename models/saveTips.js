const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const SaveTipsSchema = new Schema({
    wasteReducedName: String,
    monthlySavings: Number,
    timeItTakes: Number,
    whatToDo: String
})

const SaveTipsModel = mongoose.model('SaveTips', SaveTipsSchema)

module.exports = SaveTipsModel