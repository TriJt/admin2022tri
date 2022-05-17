import mongoose from "mongoose"; 

const Schema = mongoose.Schema; 

const userSchema =  new Schema({ 
  username: {type: String, required: true, trim:true} ,
  email: {type: String, required: true, trim:true} ,
  password: {type: String, required: true, trim:true, minlength: 8} ,
  name: {type: String, required: true },
  address: {type: String, required: true }, 
  telephone: {type: String, required: true} ,
  photos: { type:[String]}, 
  salary:{type: Number, required: true },
  totalSalary: [{bonus: Number, unavailableDates: {type: Date} }],
  position: {type: String, required: true},
  numbership: {type:String, required:true}, 
  isAdmin: {type: Boolean, required:true,default:false} 
}, { timestamps:true,}
);
  
const User= mongoose.model('User',userSchema); 
export default User; 