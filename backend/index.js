const express = require("express");
const message = require("./router/message");
const core = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(core());
app.use(express.json());



mongoose.connect("mongodb+srv://pdd2498:7Sx7Aloz3XQ0SlGf@cluster0.18ap8on.mongodb.net/").then(()=>console.log("data base conect successfull")).catch((err) => console.log(err , "mongose error conecting"));


app.get("/" , (req , res)=>{
    return res.json({
        suceess:true,
        message:"tera bhai tera bhia"
    })
})
app.use("/message" , message);



app.listen(10000 , ()=> console.log("app is runing in 10000"));