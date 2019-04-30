const mongoose = require('..db/connection.js')
const Schema = mongoose.Schema

const GreenWaysSchema = new Schema({
    wayToBeGreenName: String,
    timeItTakes: String,
    whatToDo: String
})

const GreenWaysModel = mongoose.model('GreenWays', GreenWaysSchema)

module.exports = GreenWaysModel