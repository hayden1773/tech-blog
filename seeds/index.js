const { Router } = require("express")
const sequelize = require("../config/connection")
const {User,} = require("../models")

const users = [
    {
        username:"Hayden",
        password:"password123",
        email: "hay@y.com"
    },
    
   
]

const people = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
    } catch(err){
        console.log(err)
    }
}

people()