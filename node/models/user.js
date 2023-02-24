const mongoose = require('mongoose');

const User = mongoose.model('User',{
    s_name : {type: String},
    l_name : {type: String},
    email : {type: String},
    mobile : {type: String},
    password : {type: String},
    add_one : {type: String},
    add_two : {type: String},
    city : {type: String},
    state : {type: String},
    pin : {type: String},
    profile_pic : {type :String},
});

module.exports = User;