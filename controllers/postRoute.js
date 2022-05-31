const express = require("express");
const router = express.Router();
const {User,Post} = require("../models");


//find all
router.get("/", (req, res) => {
  Post.findAll({})
    .then(dbPost => {
      res.json(dbPost);
    })


    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });

});


//find one
router.get("/:id", (req, res) => {
  Post.findByPk(req.params.id,{})
    .then(dbPost => {
      res.json(dbPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//create Post
router.post("/", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"login to create a post!"})
}
Post.create({
    title:req.body.title,
    body:req.body.body,
    UserId:req.session.user.id
  })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

//update Post
router.put("/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedPost => {
    res.json(updatedPost);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

//delete a Post
router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(delPost => {
    res.json(delPost);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;