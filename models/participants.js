const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    state: String
})

const ParticipantModel = mongoose.model("Participant", ParticipantSchema)

module.exports = ParticipantModel