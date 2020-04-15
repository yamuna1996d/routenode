var mongoose = require('mongoose');
const regSchema= new mongoose.Schema({
    empName: String,
    empCode: Number,
    empCompany: String,
    empEmail:String,
    empPhone:Number,
    empPassword:String
});
const regmodel= mongoose.model('registrations',regSchema);
module.exports = {regmodel}