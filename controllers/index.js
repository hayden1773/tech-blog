const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const commentRoutes = require("./commentRoutes");
router.use("/api/comment",commentRoutes)

const frontEnd = require("./frontRoutes");
router.use("/",frontEnd)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})




module.exports = router;