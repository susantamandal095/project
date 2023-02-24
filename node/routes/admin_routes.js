const express = require('express');
const router = express.Router();
const Admin = require('../models/admin.js');
const ObjectId = require('mongoose').Types.ObjectId;

//  base path http://localhost:3000/admin
router.get('/get_admin_data',(req,res)=>{
    Admin.find((err, doc)=>{
        if(err){
            console.log("Opp error is there in get api" +err)
        }
        else{
            res.send(doc);
        }
    });
    
});

// for singel id
router.get('/get_admin_data_byid:id',(req,res)=>{
if(ObjectId.isValid(req.params.id)){
    Admin.findById(req.params.id,(err, doc)=>{
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
router.post('/save_admin_data',(req,res)=>{
let adm = new Admin({
    s_name : req.body.s_name,
    l_name : req.body.l_name,
    email : req.body.email,
    mobile : req.body.mobile,
    password : req.body.password,
    add_one : req.body.add_one,
    add_two : req.body.add_two,
    city : req.body.city,
    state : req.body.state,
    pin : req.body.pin,
});
// use.save((err, doc)=>{
//     if(err){
//         console.log("opp error is there in save api" +err)
//     }
//     else{
//         res.send(doc);
//     }
// })
adm.save()
.then(adm =>{
    res.json({
        message : 'Admin data added successfully',
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
router.delete('/get_admin_data_delete:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Admin.findByIdAndRemove(req.params.id,(err, doc)=>{
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
                    message : 'Admin data delete succesfully',
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
router.put('/get_admin_data_update:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let use = {
            s_name : req.body.s_name,
            l_name : req.body.l_name,
            email : req.body.email,
            mobile : req.body.mobile,
            password : req.body.password,
            add_one : req.body.add_one,
            add_two : req.body.add_two,
            city : req.body.city,
            state : req.body.state,
            pin : req.body.pin,
        };
        Admin.findByIdAndUpdate(req.params.id,{$set:use},{new:true},(err, doc)=>{
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
                    message : 'Admin data update successfully',
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