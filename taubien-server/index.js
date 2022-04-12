const express = require('express'); 
const mongoose = require ('mongoose');
const cors = require ('cors'); 

require('dotenv').config(); 

const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

const uri = process.env.ATLAS_URI; 

mongoose.connect(uri, {}); 

const connection = mongoose.connection ; 
connection.once('open', ()=> { 
    console.log(` Đã nối kết được Database thành công`) ;
})



const userRouter = require('./routes/Userroute'); 
app.use('/Userroute', userRouter); 

const shipRouter = require('./routes/Shipsroute'); 
app.use('/Shipsroute', shipRouter);


const tripRouter = require('./routes/Triprouter'); 
app.use('/Triprouter',tripRouter); 

app.listen(port, () => { 
    console.log(` Đã nối kết được Server tại cổng : ${port}`) ;
});






