const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Category = mongoose.model("Category");
const Product = mongoose.model("Product");

router.get("/allcategory", requireLogin, (req, res) => {
    Category.find()
      .populate("postedBy", "_id name")
      .sort("-createdAt")
      .then((posts) => {
        res.json({ posts });
      })
      .catch((err) => {
        console.log(err);
      });
  });


  router.post("/createcategory", requireLogin, (req, res) => {
    const { categoryName } = req.body;
    if (!categoryName) {
      return res.status(401).json({ error: "Enter all required fields" });
    }
    
    const category = new Category({
      categoryName,
      postedBy: req.user,
    });
    category
      .save()
      .then((result) => {
        res.json({ category: result });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.put("/updatecategory",requireLogin,(req,res)=>{
    Category.findByIdAndUpdate(req.body.categoryId,
    {$set:{categoryName:req.body.categoryName},},{new:true},
    (err,result)=>{
        if(err){
            res.status(422).json({error:"Some error occured"})
        }
        res.json(result)
    })
  })

  router.delete("/deletecategory/:categoryId", requireLogin, (req, res) => {
    console.log(req.params.categoryId);
    Product.deleteMany({category : {$in:req.params.categoryId}}).then(function(){
      console.log("Data deleted"); // Success
  }).catch(function(error){
      console.log(error); // Failure
  });

    Category.findOne({ _id: req.params.categoryId })
      .populate("postedBy", "_id")
      .exec((err, post) => {
        if (err || !post) {
          return res.status(422).json({ error: err });
        }
        if (post.postedBy._id.toString() === req.user._id.toString()) {
          post
            .remove()
            .then((result) => {
              res.json(result);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  });

module.exports = router;