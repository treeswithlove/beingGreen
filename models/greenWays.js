const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const GreenWaySchema = new Schema({
    wayToBeGreenName: String,
    timeItTakes: String,
    whatToDo: String
})

const GreenWayModel = mongoose.model("GreenWay", GreenWaySchema)

module.exports = GreenWayModel