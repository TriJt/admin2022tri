const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const userSchema =  new Schema({ 
  username: {type: String, required: true, trim:true, minlength: 8,unique:true } ,
  password: {type: String, required: true, trim:true, minlength: 8,unique:true,maxlength:20 } ,
  name: {type: String, required: true },
  address: {type: String, required: true }, 
  telephone: {type: Number, required: true,minlength:10, maxlength:11 } ,
  salary:{type: Number, required: true },  // Lương 
  position: {type: String, required: true },
  numbership:{type:String, required:true},
  note: {type: String }
}, { timestamps:true,});

const User= mongoose.model('User',userSchema); 
module.exports = User; 