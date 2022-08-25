//const fs=require('fs')
const axios = require("axios");

exports.Enter_page = (req, res) => {
  res.render("main.ejs");
};

exports.Display_Details = (req, res) => {
  axios
    .get("")
    .then(function (response) {
      res.render("display.ejs", {
        product: response.data,
        Amount: response._amount,
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports.Add_Details=(req,res)=>{
//     res.render("data.ejs");

// }
