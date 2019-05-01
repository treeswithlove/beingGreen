const express = require('express')
const router = express.Router()

//imports greenWays controllers
const greenWaysController = require('../controllers/greenWaysController.js')

//greenWays controller Routes
router.get('/', greenWaysController.index)
router.post('/', greenWaysController.create)
router.get('/new', greenWaysController.new)
router.get('/:greenWaysId', greenWaysController.show)
router.put('/:greenWaysId', greenWaysController.update)
router.delete('/:greenWaysId', greenWaysController.delete)


//exports routes
module.exports = router