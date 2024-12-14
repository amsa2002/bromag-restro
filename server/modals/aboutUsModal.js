const mongoose = require('mongoose')

const aboutUsSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        lastUpdated:{
            type:Date,
            default:Date.now()
        }
    }
)

module.exports = mongoose.model('About', aboutUsSchema)