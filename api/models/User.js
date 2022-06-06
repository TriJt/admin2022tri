import mongoose from "mongoose"; 

const Schema = mongoose.Schema; 

const userSchema =  new Schema({ 
  username: {type: String, required: true, trim:true} ,
  email: {type: String, required: true, trim:true} ,
  password: {type: String, required: true, trim:true, minlength: 8} ,
  name: {type: String, required: true },
  address: {type: String, required: true }, 
  telephone: {type: String, required: true} ,
  photos: { type:[String], default: "https://i.pinimg.com/564x/fb/81/1b/fb811b966231e0c9b2ad60994d1ee5f9.jpg"}, 
  salary:{type: Number, required: true },
  totalSalary: [],
  position: {type: String, required: true},
  numbership: {type:String, required:true}, 
  isAdmin: {type: Boolean, required:true,default:false} 
}, { timestamps:true,}
);
  
const User= mongoose.model('User',userSchema); 
export default User; 