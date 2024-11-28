const mongoose = require('mongoose')

const EmployeeAndAdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    number:Number
})

const EmployeeModel = mongoose.model('emlpoyees', EmployeeAndAdminSchema)
module.exports = EmployeeModel