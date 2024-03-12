const express = require('express');
const sequelize = require('./config/db');
const User = require('./models/userModel');
const port = 3000;
const app = express();
app.get('/',async (req,res)=>{
    let Users = await User.findAll();
    res.json("welcome to onekey....");
});

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})