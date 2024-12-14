const mongoose = require('mongoose')

const adminUserSchema = mongoose.Schema(
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
    { timestamps: true } 
)

module.exports = mongoose.model("Admin", adminUserSchema)