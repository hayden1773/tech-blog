const express = require('express');
const router = express.Router();
const {User,Post} = require('../models');



router.get("/",(req,res)=>{
    Post.findAll().then(Post=>{
        console.log(Post)
        const hbsPost = Post.map(Post=>Post.get({plain:true}))
        

        console.log(hbsPost)

        const loggedIn = req.session.user?true:false
        res.render("homepage",{Post:hbsPost,loggedIn,username:req.session.user?.username})
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
        include:[Post]
    }).then(userData=>{
        console.log(userData);
        
        const hbsData = userData.get({plain:true})
        


        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("dashboard",hbsData)
    })
})

module.exports = router;