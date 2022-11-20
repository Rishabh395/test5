const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String, 
    email:String, 
    contact_us:String, 
    password:String ,
    confirm_password:String

}); 
module.exports = mongoose.model("servies" , userSchema);
