const express = require("express");
const router = express();
const crypto = require('crypto')
const mongoose = require('mongoose');
const nodemon = require("nodemon");
const bcrypt = require("bcryptjs");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config/keys")
const requireLogin = require("../middleware/requireLogin")
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const {SENDGRID_API,EMAIL} = require('../config/keys')

//

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:SENDGRID_API
    }
}))

router.post("/signup", (req, res) => {
    const { name, email,phone, password, pic } = req.body;
    if (!name || !email || !password||!phone) {
        return res.status(404).json({ error: "Please add the empty fields also." })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(404).json({ error: "User already exists." })
            }
            bcrypt.hash(password, 12)
                .then(hashedpassword => {
                    const user = new User({
                        email,
                        phone,
                        password: hashedpassword,
                        name,
                        pic
                    })
                    user.save()
                        .then((user) => {
                            transporter.sendMail({
                                to:user.email,
                                from:"sakshamtolani@gmail.com",
                                subject:"Account signup successful",
                                html:`<h1>Congratulations! You just signed up successfully.</h1> 
                                <p>You're almost set to start using Inventory Management System.Welcome, ${user.name}.</p>
                                <br>
                                Cheers,
                                `
                            })
                            return res.json({ message: "User saved successfully!!" })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
        })

        .catch(err => {
            console.log(err);
        })
})
router.post("/signin", (req, res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(422).json({error:"Please enter email and password."})
    }
    User.findOne({email:email})
    .then(savedUser =>{
        if(!savedUser){
            return res.status(404).json({Error:"Enter correct email or password."})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id : savedUser._id},JWT_SECRET)
                const {_id,name,email,phone,followers,following,pic}=savedUser
                res.json({token,user:{_id,name,email,phone,followers,following,pic}})
            }
            else{
                return res.status(404).json({Error:"Enter correct email or password."})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})
router.post("/reset-password",(req,res)=>{
    crypto.randomBytes(32,(err,buffer)=>{
        if(err){
            console.log(err)
        }
        const token = buffer.toString("hex")
        User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error:"User does not exist with the provided email id"})
            }
            user.resetToken = token
            user.expireToken = Date.now() + 3600000
            user.save()
            .then(result=>{
                transporter.sendMail({
                    to:user.email,
                    from:"sakshamtolani@gmail.com",
                    subject:"Reset password",
                    html:`
                    <p>Hi, ${user.name}.

                    You received this email because you have requested to reset password for your Inventory Management Account <b>"${user.name}"</b>.
                    <br>
                    To reset your password, 
                    <a href="${EMAIL}/reset/${token}">Click here</a>
                    <br>
                    If you have any questions, we're more than happy to help. Please contact us at sakshamtolani@gmail.com.
                    <br>
                    Cheers,
                    `
                })
                res.json({message:"Please have a look at your mails."})
            })
        })
    })
})

router.post('/new-password',(req,res)=>{
    const newPassword = req.body.password
    const sentToken = req.body.token
    User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
    .then(user=>{
        if(!user){
            return res.status(422).json({error:"Try again session expired"})
        }
        if(bcrypt.compare(newPassword,user.password).then(result=>{
            if(result){
                return res.status(404).json({ error: "Same as previous password." })
            }
            else{
                bcrypt.hash(newPassword,12).then(hashedpassword=>{
                    user.password = hashedpassword
                    user.resetToken = undefined
                    user.expireToken = undefined
                    user.save().then((saveduser)=>{
                     transporter.sendMail({
                         to:user.email,
                         from:"sakshamtolani@gmail.com",
                         subject:"Password changed successfully",
                         html:`Hello, 
                         <br>
                         <br>
                         - This is a confirmation that the password for your account ' ${saveduser.email} ' has just been changed.
                         <br>
                         Cheers,
                         `
                     })
                     return res.json({message:"Password changed Successfully"})
                 })
             }).catch(err=>{
                 console.log(err)
                 return err
             })
            }
        }).catch(err => {
            console.log(err)
            return err
            })
        )
        return;
})
})


module.exports = router