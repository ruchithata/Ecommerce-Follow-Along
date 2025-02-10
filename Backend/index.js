const express=require('express');
const connectDB = require('./src/Database/db');
const userrouter = require('./src/Controllers/user');
const {get} = require('mongoose');
const productrouter = require('./src/Controllers/Products');

const app=express();

require('dotenv').config({
    path:'./src/config/.env'
});

const PORT=process.env.port || 5000;
const url=process.env.db_url;


app.use('/auth', userrouter);   
app.listen(PORT, async()=>{

    try {
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    }
    catch(err){
        console.log(err);
    }
})


app.use('/auth', userrouter);  
app.use('/product', productrouter);


app.get('/', (res,req)=>{
    res.send('Product Router');
});

