const  {Sequelize, DataTypes, Model} = require('sequelize');
const _sequelize =new Sequelize("onekey","root","root",{
    host:"127.0.0.1",
    dialect:"mysql"
});
try{
    _sequelize.authenticate();
    console.log("connection has been established successfully") 
}catch(error){
    console.log('unable to connect to the database',error);
}
module.exports = _sequelize;