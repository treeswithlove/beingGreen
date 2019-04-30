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
        ParticipantModel.findById(req.params.id).then(participant => {
            res.render("participants/show", {participant})
        })
    },
    // creates a new participant
    create: function(req,res) {
        newParticipant = (req.body)
        ParticipantModel.create(newParticipant).then(() => res.redirect("/participant"))
    },
    update: function(req,res){
        ParticipantModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.send()
        })
    },
    delete: function(req,res){
        ParticipantModel.findByIdAndDelete(req.params.id).then(() => {
            res.redirect('/participant').catch((error) => {
                console.log(error)
            })
        })
    }

}

module.exports = ParticipantController