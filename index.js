const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const {MONGOURI} = require("./config/keys");


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected', (err) => {
    if (!err) {
        console.log("Connected Succesfully!!");
    } else {
        console.log(err);
    }
}
)
require("./models/user");
require("./models/product");
require("./models/category");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/product"));
app.use(require("./routes/category"));
app.use(require("./routes/user"));

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT, () => {
    console.log("Server has started");
})