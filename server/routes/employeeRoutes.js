const express = require("express")
const {employeeLogin} = require('../controllers/employeeController.js')

const router = express.Router()


router.post("/employee-login", employeeLogin)

module.exports = router
