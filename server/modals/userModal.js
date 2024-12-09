const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    number:Number
})

module.exports= mongoose.model('Users', UserSchema)
