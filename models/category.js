const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types
const categorySchema = new mongoose.Schema({
    categoryName: {
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref : "User"
    }   
    
}, {timestamps:true})

mongoose.model("Category", categorySchema)