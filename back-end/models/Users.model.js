const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt');

const userSchema =  new Schema({ 
  email: {type: String, required: true, trim:true,unique:true } ,
  password: {type: String, required: true, trim:true, minlength: 8,unique:true } ,
  name: {type: String, required: true },
  address: {type: String, required: true }, 
  telephone: {type: Number, required: true} ,
  salary:{type: Number, required: true },
  position: {type: String, required: true },
  numbership:{type:String, required:true},
}, { timestamps:true,});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User= mongoose.model('User',userSchema); 
module.exports = User; 