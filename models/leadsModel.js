const sequelize = require('../config/db');
const DataTypes = require('sequelize');
const Product = require('./productModel');
const Leads = sequelize.define({
    lead_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    lead_info:{
        type:DataTypes.JSON
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:Product,
            key:'product_id'
        }
    }
},{versionKey:false,timestamps:true});

const createLeads =async()=>{
    await Leads.sync({force:true});
    console.log('Leads table is created');
}

module.exports = {Leads,createLeads};