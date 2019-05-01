const express = require('express')
const router = express.Router()

//imports saveTip controllers
const saveTipsController = require('../controllers/saveTipsController.js')

//saveTip controller Routes
router.get('/', saveTipsController.index)
router.post('/', saveTipsController.create)
router.get('/new', saveTipsController.new)
router.get('/:saveTipId', saveTipsController.show)
router.put('/:saveTipId', saveTipsController.update)
router.delete('/:saveTipId', saveTipsController.delete)


//exports routes
module.exports = router