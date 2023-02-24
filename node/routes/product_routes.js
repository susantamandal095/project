const express = require('express');
const router = express.Router();
const Product = require('../models/product.js');
const ObjectId = require('mongoose').Types.ObjectId;

//  base path http://localhost:3000/product
router.get('/get_product_data',(req,res)=>{
    Product.find((err, doc)=>{
        if(err){
            console.log("Opp error is there in get api" +err)
        }
        else{
            res.send(doc);
        }
    });
    
});

// for singel id
router.get('/get_product_data_byid:id',(req,res)=>{
if(ObjectId.isValid(req.params.id)){
    Product.findById(req.params.id,(err, doc)=>{
        if(err){
            console.log("Opp error is there in get by id api" +err)
        }
        else{
            res.send(doc);
        }
    })
}

else  {
    return res.status(400).send('No record found with id' + req.params.id)
}    
});
// post
router.post('/save_product_data',(req,res)=>{
let pro = new Product({
    product_name : req.body.product_name,
    product_brand_name : req.body.product_brand_name,
    product_description : req.body.product_description,
    product_size : req.body.product_size,
    product_qty : req.body.product_qty,
    product_quality : req.body.product_quality,
    product_base_price : req.body.product_base_price,
    product_discount_price : req.body.product_discount_price,
    // state : req.body.state,
    // pin : req.body.pin,
});
// use.save((err, doc)=>{
//     if(err){
//         console.log("opp error is there in save api" +err)
//     }
//     else{
//         res.send(doc);
//     }
// })
pro.save()
.then(pro =>{
    res.json({
        message : 'Product data added successfully',
        status : true
    })
})
.catch(error=>{
    res.json({
        message : 'Invalide user' +err,
        status : false
    })
})

});

// for singel id delete
router.delete('/get_product_data_delete:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Product.findByIdAndRemove(req.params.id,(err, doc)=>{
            if(err){
                // console.log("opp error is there in delete api" +err)
                res.json({
                    message : 'Opp error is there in delete api' +err,
                    status : false
                })
            }
            else{
                // res.send(doc);
                res.json({
                    message : 'Product data delete succesfully',
                    status : true
                })
            }
        })
    }
    
    else  {
        return res.status(400).send('No record found with id for delete' + req.params.id)
    }    
    });
// for singel id put
router.put('/get_product_data_update:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let use = {
            product_name : req.body.product_name,
            product_brand_name : req.body.product_brand_name,
            product_description : req.body.product_description,
            product_size : req.body.product_size,
            product_qty : req.body.product_qty,
            product_quality : req.body.product_quality,
            product_base_price : req.body.product_base_price,
            product_discount_price : req.body.product_discount_price,
            // state : req.body.state,
            // pin : req.body.pin,
        };
        Product.findByIdAndUpdate(req.params.id,{$set:use},{new:true},(err, doc)=>{
            if(err){
                // console.log("opp error is there in update/put api" +err)
                res.json({
                    message : "Opp error is there in update/put api" +err,
                    status : false
                })
            }
            else{
                // res.send(doc);
                res.json({
                    message : 'Product data update successfully',
                    status : true
                })
            }
        })
    }
    
    else  {
        return res.status(400).send('No record found with id for update' + req.params.id)
    }    
    });
module.exports = router;