const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    resetToken:String,
    expireToken:Date,
    pic:{
        type:String,
        default:"https://res.cloudinary.com/sakshamtolani/image/upload/v1637816425/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture_ijh7lz.jpg"
    },
    // followers:[{
    //     type:ObjectId,
    //     ref:"User"
    // }],
    // following:[{
    //     type:ObjectId,
    //     ref:"User"
    // }]

})

mongoose.model("User", userSchema);