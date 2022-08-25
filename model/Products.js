const mongoose = require('mongoose');
const moment = require('moment')

const ProductSchema = new mongoose.Schema({
    
    amount:Number,

    description:String,
    payment_type:String,
    currentamount:Number,
 date:String
 

})

module.exports = mongoose.model("salary", ProductSchema)