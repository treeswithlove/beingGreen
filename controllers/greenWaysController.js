// GreenWay model
const GreenWayModel = require('../models/greenWays.js')


//GreenWay controller

const GreenWayController = {
    //finds all greenWays
    index: function(req, res){
        GreenWayModel.find().then(greenWay => {
            res.render('greenWays/index', {greenWay})
        })
    },

    // user will be directed to create a greenWay form
    new: function(req, res){
        res.render("greenWays/new")
    },
    // shows one greenWay
    show: function(req,res){
        GreenWayModel.findById(req.params.greenWayId).then(greenWay => {
            res.render("greenWays/show", {greenWay})
        })
    },
    // creates a new greenWay
    create: function(req,res) {
        newGreenWay = (req.body)
        GreenWayModel.create(newGreenWay).then(() => res.redirect("/greenWays"))
    },
    //updates and returns to index.hbs
    update: function(req,res){
        GreenWayModel.findByIdAndUpdate(req.params.greenWayId, req.body).then(() => {
            res.redirect("/greenWays")
        })
    },
    //deletes and returns to index.hbs
    delete: function(req,res){
        GreenWayModel.findByIdAndRemove(req.params.greenWayId).then(() => {
            res.redirect("/greenWays")
            })
        }
    }

module.exports = GreenWayController