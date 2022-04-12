const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const tripSchema = new Schema({ 
    numberShip : {type: String, required: true}, 
    dayout: {type: Date, required: true}, 
    dayin: {type:Date, required:true}, 
    fuel: { type: Number, required:true}, 
    revenue: {type:Number, required:true}
}
) 

const Trip = mongoose.model('Trip',tripSchema); 
module.exports = Trip; 