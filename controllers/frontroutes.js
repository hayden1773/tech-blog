const express = require('express');
const router = express.Router();
const {User,comment} = require('../models');

router.get("/",(req,res)=>{
    comment.findAll().then(comment=>{
        
        const comments = comment.map(comment=comment.get({plain:true}))
        console.log("==========")
        console.log(comments)
        const loggedIn = req.session.user?true:false
        res.render("home",{comment:comments,loggedIn,username:req.session.user?.username})
    })
})

router.get("/login",(req,res)=>{
    if(req.session.user){
        return res.redirect("/dashboard")
    }
    res.render("login")
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user.id,{
        include:[comment]
    }).then(userData=>{
        const data = userData.get({plain:true})
        hbsData.loggedIn = req.session.user?true:false
        res.render("dashboard",data)
    })
})

module.exports = router;