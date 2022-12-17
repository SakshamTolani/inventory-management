const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    category:{
        type:ObjectId,
        ref: "Category"
    },
    postedBy:{
        type:ObjectId,
        ref : "User"
    }    
},{timestamps:true})

mongoose.model("Product",productSchema);