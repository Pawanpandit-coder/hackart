const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name: {type: String, Required:true},
    user_email: {type: String, Required: true, unique: true},
    user_password:{ type: String, required: true}
})


const User = mongoose.model('User',userSchema)

module.exports = User;