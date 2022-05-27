const express = require("express");
const router = express.Router();
const {User,comment} = require("../models");



router.get("/", (req, res) => {
  comment.findAll({})
    .then(dbComment => {
      res.json(dbComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});

router.get("/:id", (req, res) => {
  comment.findByPk(req.params.id,{})
    .then(dbComment => {
      res.json(dbComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});


router.post("/", (req, res) => {
  if(!req.session.user){
    return res.status(401).json({msg:"ya gotta login to create a blog post!"})
}
  comment.create({
    title:req.body.title,
    body:req.body.body,
    UserId:req.session.user.id
  })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "an error occured", err });
    });
});


router.put("/:id", (req, res) => {
  comment.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(updatedComment => {
    res.json(updatedComment);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});


router.delete("/:id", (req, res) => {
  comment.destroy({
    where: {
      id: req.params.id
    }
  }).then(delComment => {
    res.json(delComment);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ msg: "an error occured", err });
  });
});

module.exports = router;