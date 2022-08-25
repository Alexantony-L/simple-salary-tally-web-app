const mongoose = require('mongoose')

const EmailSchema = new mongoose.Schema({

    email:String,
    currentamount:Number
})

module.exports = mongoose.model("users", EmailSchema)