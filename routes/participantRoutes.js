const express = require('express')
const router = express.Router()

//imports participant controllers
const participantController = require('../controllers/participantController.js')

//participant controller Routes
router.get('/', participantController.index)
router.post('/', participantController.create)
router.get('/new', participantController.new)
router.get('/:participantId', participantController.show)
router.put('/:participantId', participantController.update)
router.delete('/:participantId', participantController.delete)


//exports routes
module.exports = router