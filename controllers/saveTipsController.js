// saveTip model
const SaveTipModel = require('../models/saveTips.js')


//saveTip controller

const SaveTipController = {
    //finds all saveTips
    index: function(req, res){
        SaveTipModel.find().then(saveTip => {
            res.render('saveTips/index', {saveTip})
        })
    },

    // user will be directed to create a saveTip form
    new: function(req, res){
        res.render("saveTips/new")
    },
    // shows one saveTip
    show: function(req,res){
        SaveTipModel.findById(req.params.saveTipId).then(saveTip => {
            res.render("saveTips/show", {saveTip})
        })
    },
    // creates a new saveTip
    create: function(req,res) {
        newSaveTip = (req.body)
        SaveTipModel.create(newSaveTip).then(() => res.redirect("/saveTips"))
    },
    //updates and returns to index.hbs
    update: function(req,res){
        SaveTipModel.findByIdAndUpdate(req.params.saveTipId, req.body).then(() => {
            res.redirect("/saveTips")
        })
    },
    //deletes and returns to index.hbs
    delete: function(req,res){
        SaveTipModel.findByIdAndRemove(req.params.saveTipId).then(() => {
            res.redirect("/saveTips")
            })
        }
    }

module.exports = SaveTipController