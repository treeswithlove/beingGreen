//node db/seeds.js
const participants = require("../models/participants.js")

const seedsParticipants = [{}]

participants.ParticipantModel.create(seedsParticipants)
.then(participants => {
    console.log("Saved Participants", participants )
})