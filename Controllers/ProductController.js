const Schema = require('../model/Products');
const Email_Schema = require('../model/Check_email');
const moment = require('moment')
//const mongoose=require('mongoose')


// Get all product

const product_all = async(req, res) => {
    try {
        const product = await Schema.find();
        res.json(product);
    } catch (error) {
        res.json({ Message: error.Message })
    }
};

// Check email
const Check_Email= async(req, res) => {
         try {
               let  details=await Email_Schema.findOne({email:req.body.email,currentamount:req.body.amount});
        if(details.email && details.currentamount){
             res.redirect('/Display_Details');
        
       }
    } catch (error) {  res.redirect('/') }
}

const product_add= async(req,res) => {
   
        const product = new Schema({
       
                    amount:req.body.amount,
                  
                    description:req.body.description,
                    payment_type:req.body.payment_type,
                    date:req.body.date
                 })
                    
                                      
                try {
                    
                
                  if(product){      
             const Amount = await Email_Schema.find();
            let _amount=Amount[0].currentamount;
                          
              if(product.payment_type=="R"){
                                   
                        var oldamount={currentamount:_amount}; 
                        var   updatevalue=_amount+product.amount 
                        var newamount={$set:{currentamount:updatevalue}}
                        await  Email_Schema.updateOne(oldamount,newamount); 
                        product.currentamount=updatevalue;   
                         await product.save(); 
                          res.redirect('/Display_Details');

                      } if(product.payment_type=="S"){

                        var oldamount={currentamount:_amount};
                        var   updatevalue=_amount-product.amount
                        var newamount={$set:{currentamount:updatevalue}}
                      await  Email_Schema.updateOne(oldamount,newamount);
                        product.currentamount=updatevalue;
                    await product.save();
                         res.redirect('/Display_Details');

                      }

                  }
                  
                } catch (error) { res.json({ Message: error.Message }) }

     }




module.exports = {
    product_all,
    product_add,
    Check_Email,
 }