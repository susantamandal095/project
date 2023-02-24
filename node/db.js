const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/susantademo', (err)=>{
    if(!err){
        console.log("db connected successful");
    }
    else{
        console.log("not connected" + err);
    }
})
module.exports = mongoose;