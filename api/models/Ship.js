import mongoose from "mongoose"; 


const ShipSchema =  new mongoose.Schema({ 
    number: {type: String, required: true, unique: true},
    name: {type: String, required: true },
    photos: { type:[String]},  
    members: {type: [String]},
    trips:{type:[String]},
    desc: {type:String, required:true},
    status: { type: String,required:true }, 
  },
    { timestamps:true,}
  )
export default mongoose.model("Ship", ShipSchema);