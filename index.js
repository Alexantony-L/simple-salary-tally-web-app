const express = require('express');
const dotenv = require('dotenv');
//const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path=require('path')
const cors = require('cors');
dotenv.config();
const app = express();
const fs=require('fs')



mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB Connected')

})

const productroutes = require('./routes/ProdictRoutes')

//middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());

app.use(cors());
//route midleware

app.set("view-engine","ejs")
app.use("/", productroutes);


app.listen(3000, () => {
    console.log('server started');
})