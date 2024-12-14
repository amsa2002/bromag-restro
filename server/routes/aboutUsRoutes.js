const express = require('express')
const {getAbout, addAbout, editAbout, deleteAbout} = require ('../controllers/aboutUsController.js')

const router = express.Router()

router.post('/', addAbout)
router.put('/:id', editAbout)
router.delete('/:id', deleteAbout)
router.get('/', getAbout)

module.exports = router