var mongoose = require('mongoose');
const regSchema= new mongoose.Schema({
    name: String,
    empCode: Number,
    company: String,
    email:String,
    phone:Number,
    empPassword:String
});
const regmodel= mongoose.model('registrations',regSchema);
module.exports = {regmodel}