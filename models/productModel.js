const sequelize = require('../config/db');
const Datatypes = require('sequelize'); 
const User = require('./userModel');
const Product = sequelize.define({
   product_id:{
    type:Datatypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
   },
   name:{
    type:Datatypes.STRING(100),
    allowNull:false
   },
   description:{
    type:Datatypes.TEXT
   },
   owner_id:{
    type:Datatypes.INTEGER,
    allowNull:false,
    references:{
        model:User,
        key:'user_id'
    }
   }
},{versionKey:false,timestamps:true});

module.exports = {Product};