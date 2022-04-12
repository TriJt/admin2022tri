const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;  

const shipSchema =  new Schema({ 
    numberShip: {type: String, required: true, trim:true,unique:true } , // Mã số tàu 
    nameofShip: {type: String, required: true },  // Tên tàu 
    numberofmember: {type: Number, required:true}, // Số lượng thành viên 
    Status: { type: String,required:true }, // Doanh thu của tàu 
    // Dayout: {type: Date,required:true},  // Ngày ra khơi 
    // Dayin: {type: Date,required:true},  // Ngày vào bến 
    // Fuel: {type: Number, required:true}, // Nhiên liệu 
    // note: {type: String} // Ghi chú
  },
    { timestamps:true,}
  
  )
  
  const Ship = mongoose.model('Ship',shipSchema); 
  module.exports = Ship;