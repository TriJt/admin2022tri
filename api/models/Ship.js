import mongoose from "mongoose"; 


const ShipSchema =  new mongoose.Schema({ 
    number: {type: String, required: true, unique: true},
    name: {type: String, required: true },
    photos: { type:[String],default: "https://i.pinimg.com/750x/5c/f5/2d/5cf52deafd628fedb8a72b3dbfea0167.jpg"},  
    members: {type: [String]},
    trips:{type:[String]},
    desc: {type:String, required:true},
    status: { type: String,required:true }, 
  },
    { timestamps:true,}
  )
export default mongoose.model("Ship", ShipSchema);