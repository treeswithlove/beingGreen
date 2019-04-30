// participant model
const ParticipantModel = require('../models/participants.js')


//participant controller

const ParticipantController = {
    //finds all participants
    index: function(req, res){
        ParticipantModel.find().then(participant => {
            res.render('participants/index', {participant})
        })
    },

    // user will be directed to create a participant form
    new: function(req, res){
        res.render("participants/new")
    },
    // shows one participant
    show: function(req,res){
        ParticipantModel.findById(req.params.participantId).then(participant => {
            res.render("participants/show", {participant})
        })
    },
    // creates a new participant
    create: function(req,res) {
        newParticipant = (req.body)
        ParticipantModel.create(newParticipant).then(() => res.redirect("/participants"))
    },
    update: function(req,res){
        ParticipantModel.findByIdAndUpdate(req.params.participantId, req.body).then(() => {
            // res.render("participants/index", {participant})
            res.redirect("/participants")
        })
    },
    delete: function(req,res){
        ParticipantModel.findByIdAndRemove(req.params.participantId).then(() => {
            res.redirect("/participants")
            })
        }
    }

module.exports = ParticipantController