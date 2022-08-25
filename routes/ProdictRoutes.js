const express = require('express');
const router = express.Router();
const services=require('../services/render')
const productcontroller = require('../Controllers/ProductController')
const app=express()

/*
geting html pages

*/

router.get('/',services.Enter_page)
router.get('/Display_Details',services.Display_Details)


app.use(express.urlencoded({extended:true}))
app.use(express.json());


router.post("/", productcontroller.Check_Email);
router.post("/insert", productcontroller.product_add);
router.get("/get", productcontroller.product_all);




module.exports = router;
