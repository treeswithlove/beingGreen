const express = require('express')
const router = express.Router()

//imports greenWays controllers
const greenWaysController = require('../controllers/greenWaysController.js')

//greenWays controller Routes
router.get('/', greenWaysController.index)
router.post('/', greenWaysController.create)
router.get('/new', greenWaysController.new)
router.get('/:greenWayId', greenWaysController.show)
router.put('/:greenWayId', greenWaysController.update)
router.delete('/:greenWayId', greenWaysController.delete)


//exports routes
module.exports = router