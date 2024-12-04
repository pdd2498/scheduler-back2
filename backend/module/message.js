const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        require:true,
    },
    message:{
        type:String,
        require: true,
    },
    date:{
        type: Date,
        require: true,
    }
})

const userModule = mongoose.model("message" , userSchema);

module.exports = userModule ;
