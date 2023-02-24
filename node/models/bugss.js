const mongoose = require('mongoose');

const Bugss = mongoose.model('Bugss',{
    qc_pending : {type: String},
    pending_request : {type: String},
    complete_request : {type: String},
    qc_developers : {type: String},
    pending_developers : {type: String},
    complete_developers : {type: String},
    qc_support_developers : {type: String},
    pending_support_developers : {type: String},
    complete_support_developers : {type: String},
    qc_developers_days : {type: String},
    pending_developers_days : {type: String},
    complete_developers_days : {type: String},
    last_update_date : {type : String},
    bugspo: [{
        new : {type: String},
        year : {type: String},
    }]
});

module.exports = Bugss;