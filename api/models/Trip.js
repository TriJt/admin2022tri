import mongoose from "mongoose"; 
const Schema = mongoose.Schema; 

const tripSchema = new Schema({
    numbership: {type: String, required:true},
    title: {type: String, required: true},
    dayout: {type:Date, required: true}, 
    dayin: {type:Date, required:true},
    fuel: { type: Number, required:true}, 
    revenue: {type:Number, required:true}
},
{ timestamps:true,}
) 


export default mongoose.model("Trip", tripSchema);