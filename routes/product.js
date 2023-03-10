const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Product = mongoose.model("Product");
const Category = mongoose.model("Category");

router.get("/allpost", requireLogin, (req, res) => {
  Product.find()
    .populate("postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      res.json({
        posts
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/getsubpost", requireLogin, (req, res) => {
  Product.find({
      category: {
        $in: req.body.category
      }
    })
    .populate("postedBy", "_id name")
    .sort("-createdAt")
    .then((posts) => {
      res.json({
        posts
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createpost", requireLogin, (req, res) => {
  const {
    name,
    price,
    stock,
    category
  } = req.body;
  console.log(req.body);
  if (!name || !price || !stock || !category) {
    
    return res.status(401).json({
      error: "Enter all required fields"
    });
  }
  req.user.password = undefined;
  const post = new Product({
    name,
    price,
    stock,
    category,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({
        post: result
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.get("/mypost", requireLogin, (req, res) => {
//   Post.find({ postedBy: req.user._id })
//     .populate("postedBy", "_id name")
//     .then((mypost) => {
//       res.json({ mypost });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.put("/like", requireLogin, (req, res) => {
//   Post.findByIdAndUpdate(
//     req.body.postId,
//     {
//       $push: { likes: req.user._id },
//     },
//     {
//       new: true,
//     }
//   ).exec((err, result) => {
//     if (err) {
//       return res.status(422).json({ error: err });
//     } else {
//       res.json(result);
//     }
//   });
// });
// router.put("/unlike", requireLogin, (req, res) => {
//   Post.findByIdAndUpdate(
//     req.body.postId,
//     {
//       $pull: { likes: req.user._id },
//     },
//     {
//       new: true,
//     }
//   ).exec((err, result) => {
//     if (err) {
//       return res.status(422).json({ error: err });
//     } else {
//       res.json(result);
//     }
//   });
// });
// router.put("/comment", requireLogin, (req, res) => {
//   const comment = {
//     text: req.body.text,
//     postedBy: req.user._id,
//   };
//   Post.findByIdAndUpdate(
//     req.body.postId,
//     {
//       $push: { comments: comment },
//     },
//     {
//       new: true,
//     }
//   )
//     .populate("comments.postedBy", "_id name")
//     .populate("postedBy", "_id name")
//     .exec((err, result) => {
//       if (err) {
//         return res.status(422).json({ error: err });
//       } else {
//         res.json(result);
//       }
//     });
// });

router.delete("/deletepost/:postId", requireLogin, (req, res) => {
  Product.findOne({
      _id: req.params.postId
    })
    .populate("postedBy", "_id")
    .exec((err, post) => {
      if (err || !post) {
        return res.status(422).json({
          error: err
        });
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


router.put("/updateproduct",requireLogin,(req,res)=>{
  console.log(req.body.category);
  Product.findByIdAndUpdate(req.body.postId,
  {$set:{name:req.body.name, price:req.body.price, stock:req.body.stock, category:req.body.category},},{new:true},
  (err,result)=>{
      if(err){
          console.log(err);
          res.status(422).json({error:"Some error occured"})
      }
      res.json(result)
  })
})
// router.delete("/deletecomment/:id/:comment_id", requireLogin, (req, res) => {
//   const comment = { _id: req.params.comment_id };
//   Post.findByIdAndUpdate(
//     req.params.id,
//     {
//       $pull: { comments: comment },
//     },
//     {
//       new: true,
//     }
//   )
//     .populate("comments.postedBy", "_id name")
//     .populate("postedBy", "_id name ")
//     .exec((err, postComment) => {
//       if (err || !postComment) {
//         return res.status(422).json({ error: err });
//       } else {
//         const result = postComment;
//         res.json(result);
//       }
//     });
// });
module.exports = router;