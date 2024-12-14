const mongoose = require('mongoose')

const bannerSchema = new mongoose.Schema(
    {
        context:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:String,
            required:true,
        },
    },
    { timestamps: true } 
)

module.exports = mongoose.model('Banner', bannerSchema)