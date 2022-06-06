import mongoose from "mongoose"; 
const Schema = mongoose.Schema; 

const SalarySchema = new Schema({
    name: {type: String, required:true},
    title: {type: String, required: true},
    day: {type:Date, required: true}, 
    salary: { type: Number, required:true}, 
    bonus: {type:Number, required:true}, 
    type: {type:String, required: true}
},
{ timestamps:true,}
) 

export default mongoose.model("Salar", SalarySchema);