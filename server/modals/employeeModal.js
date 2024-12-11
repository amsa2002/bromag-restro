const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
        password:{
            type:String,
        },
        email:{
            type:String,
        },
    },
    {timestamp:true}
)

module.exports = mongoose.model("Employee" ,employeeSchema)