const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const ObjectId = require('mongoose').Types.ObjectId;

//  base path http://localhost:3000/user
router.get('/get_user',(req,res)=>{
    User.find((err, doc)=>{
        if(err){
            console.log("opp error is there in get api" +err)
        }
        else{
            res.send(doc);
        }
    });
    
});

////for single data 
router.get('/get_user_one',(req,res)=>{
    User.find({city: "dfgdfg"},(err, doc)=>{
        if(err){
            console.log("opp error is there in get api" +err)
        }
        else{
            res.send(doc);
        }
    });
    
});

// for singel id
router.get('/get_user_byid:id',(req,res)=>{
if(ObjectId.isValid(req.params.id)){
    User.findById(req.params.id,(err, doc)=>{
        if(err){
            console.log("opp error is there in get by id api" +err)
        }
        else{
            res.send(doc);
        }
    })
}

else  {
    return res.status(400).send('no record found with id' + req.params.id)
}    
});
// post
router.post('/save_user_data',(req,res)=>{
let use = new User({
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
    profile_pic : req.body.profile_pic,
});
// use.save((err, doc)=>{
//     if(err){
//         console.log("opp error is there in save api" +err)
//     }
//     else{
//         res.send(doc);
//     }
// })
use.save()
.then(use =>{
    res.json({
        message : 'data added successfully',
        status : true
    })
})
.catch(error=>{
    res.json({
        message : 'invalide user' +err,
        status : false
    })
})

});

// for singel id delete
router.delete('/get_user_delete:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        User.findByIdAndRemove(req.params.id,(err, doc)=>{
            if(err){
                // console.log("opp error is there in delete api" +err)
                res.json({
                    message : 'opp error is there in delete api' +err,
                    status : false
                })
            }
            else{
                // res.send(doc);
                res.json({
                    message : 'Data delete succesfully',
                    status : true
                })
            }
        })
    }
    
    else  {
        return res.status(400).send('no record found with id for delete' + req.params.id)
    }    
    });
// for singel id put
router.put('/get_user_update:id',(req,res)=>{
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
            profile_pic : req.body.profile_pic,
        };
        User.findByIdAndUpdate(req.params.id,{$set:use},{new:true},(err, doc)=>{
            if(err){
                // console.log("opp error is there in update/put api" +err)
                res.json({
                    message : "opp error is there in update/put api" +err,
                    status : false
                })
            }
            else{
                // res.send(doc);
                res.json({
                    message : 'data update successfully',
                    status : true
                })
            }
        })
    }
    
    else  {
        return res.status(400).send('no record found with id for update' + req.params.id)
    }    
    });
module.exports = router;