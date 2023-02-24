const express = require('express');
const router = express.Router();
const Bugss = require('../models/bugss.js');
const ObjectId = require('mongoose').Types.ObjectId;

//  base path http://localhost:3000/bugss
router.get('/get_bugss_data',(req,res)=>{
    Bugss.find((err, doc)=>{
        if(err){
            console.log("Opp error is there in get api" +err)
        }
        else{
            res.send(doc)
        }
    });
    
});

// for singel id
router.get('/get_bugss_data_byid:id',(req,res)=>{
if(ObjectId.isValid(req.params.id)){
    Bugss.findById(req.params.id,(err, doc)=>{
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
router.post('/save_bugss_data',(req,res)=>{
    // let bugspo = 
    // {
    //     "new" : "data",
    //     "year" : "2022",
    // }
let adm = new Bugss({
    qc_pending : req.body.qc_pending,
    pending_request : req.body.pending_request,
    complete_request : req.body.complete_request,
    qc_developers : req.body.qc_developers,
    pending_developers : req.body.pending_developers,
    complete_developers : req.body.complete_developers,
    qc_support_developers : req.body.qc_support_developers,
    pending_support_developers : req.body.pending_support_developers,
    complete_support_developers : req.body.complete_support_developers,
    qc_developers_days : req.body.qc_developers_days,
    pending_developers_days : req.body.pending_developers_days,
    complete_developers_days : req.body.complete_developers_days,
    last_update_date : req.body.last_update_date,
    bugspo : req.body.bugspo,
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
        message : 'Bugss data added successfully',
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
router.delete('/get_bugss_data_delete:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        Bugss.findByIdAndRemove(req.params.id,(err, doc)=>{
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
                    message : 'Bugss data delete succesfully',
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
router.put('/get_bugss_data_update:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        let use = {
            qc_pending : req.body.qc_pending,
            pending_request : req.body.pending_request,
            complete_request : req.body.complete_request,
            qc_developers : req.body.qc_developers,
            pending_developers : req.body.pending_developers,
            complete_developers : req.body.complete_developers,
            qc_support_developers : req.body.qc_support_developers,
            pending_support_developers : req.body.pending_support_developers,
            complete_support_developers : req.body.complete_support_developers,
            qc_developers_days : req.body.qc_developers_days,
            pending_developers_days : req.body.pending_developers_days,
            complete_developers_days : req.body.complete_developers_days,
            last_update_date : req.body.last_update_date,
        };
        Bugss.findByIdAndUpdate(req.params.id,{$set:use},{new:true},(err, doc)=>{
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
                    message : 'Bugss data update successfully',
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