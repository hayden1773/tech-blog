const { Router } = require("express")
const sequelize = require("../config/connection")
const {User,} = require("../models")

const users = [
    {
        username:"Jeff",
        password:"password123",
        email: "joel@go.com"
    },
    {
        username:"Bakary",
        password:"password123",
        email: "bak@go.com"
    },
    {
        username:"Hayden",
        password:"password123",
        email: "lora@go.com"
    },
    {
        username:"Pablito",
        password:"password123",
        email: "Mar@go.com"
    }
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