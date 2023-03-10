const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Product =  mongoose.model("Product")
const User = mongoose.model("User")

router.get("/user/:id",requireLogin,(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
            return res.json({user})
    })
    .catch(err=>{
        return res.status(422).json({error:err})
    })
})

// router.put('/follow',requireLogin,(req,res)=>{
//     User.findByIdAndUpdate(req.body.followId,{
//         $push:{followers:req.user._id}
//     },{
//         new:true
//     },(err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }
//       User.findByIdAndUpdate(req.user._id,{
//           $push:{following:req.body.followId}
          
//       },{new:true}).select("-password").then(result=>{
//           res.json(result)
//       }).catch(err=>{
//           return res.status(422).json({error:err})
//       })

//     }
//     )
// })
// router.put('/unfollow',requireLogin,(req,res)=>{
//     User.findByIdAndUpdate(req.body.unfollowId,{
//         $pull:{followers:req.user._id}
//     },{
//         new:true
//     },(err,result)=>{
//         if(err){
//             return res.status(422).json({error:err})
//         }
//       User.findByIdAndUpdate(req.user._id,{
//           $pull:{following:req.body.unfollowId}
          
//       },{new:true}).select("-password").then(result=>{
//           res.json(result)
//       }).catch(err=>{
//           return res.status(422).json({error:err})
//       })

//     }
//     )
// })
router.put("/updatepic",requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,
    {$set:{name:req.body.name, email:req.body.email,phone:req.body.phone},},{new:true},
    (err,result)=>{
        if(err){
            res.status(422).json({error:"Some error occured"})
        }
        res.json(result)
    })
})

// router.post("/search-users", (req,res)=>{
//     let userPattern = new RegExp('^'+req.body.query)
//     User.find({name:{$regex:userPattern, $options:'i'}})
//     .select("_id name")
//     .then(user=>{
//         return res.json({user})
//     }).catch(err=>{
//         console.log(err)
//     })
// })
        
module.exports = router;