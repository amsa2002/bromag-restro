const express = require('express')
const {loginAdmin, verifyAdminToken} = require('../controllers/adminUserController.js')

const router = express.Router()

router.post('/adminuser-login', loginAdmin),
router.get('/verify-token', verifyAdminToken)

module.exports = router