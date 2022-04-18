const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const tripSchema = new Schema({ 
    numbership : {type: String, required: true,unique:true}, 
    dayout: {type: Date, required: true}, 
    dayin: {type:Date, required:true}, 
    fuel: { type: Number, required:true}, 
    revenue: {type:Number, required:true}
},
{ timestamps:true,}

) 

const Trip = mongoose.model('Trip',tripSchema); 
module.exports = Trip; 