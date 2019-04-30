const mongoose = require('..db/connection.js')
const Schema = mongoose.Schema

const SaveTipsSchema = new Schema({
    wasteReducedName: String,
    monthlySavings: String,
    timeItTakes: String,
    whatToDo: String
})

const SaveTipsModel = mongoose.model('SaveTips', SaveTipsSchema)

module.exports = SaveTipsModel