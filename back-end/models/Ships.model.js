const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;  

const shipSchema =  new Schema({ 
    numberShip: {type: String, required: true, trim:true,unique:true },
    nameofShip: {type: String, required: true },
    image: { type:String,required: false},  
    numberofmember: {type: Number, required:true}, 
    Status: { type: String,required:true }, 
  },
    { timestamps:true,}
  
  )
  
  const Ship = mongoose.model('Ship',shipSchema); 
  module.exports = Ship;