const mongoose = require('mongoose')

const adminUserSchema = mongoose.Schema(
    {
        name:{
            type:Stirng,
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

module.exports = mongoose.model("Admin", adminUserSchema)