const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const fs = require("node:fs");
const cron = require("node-cron");
const userModule = require("../module/message");

dotenv.config();

cron.schedule("30 10 * * *" , ()=>{
    chackData();
});


const addData = async (req , res)=>{
    try{
        const user = await userModule.create(req.body);

        console.log(user);
    
        return res.json({
            sucess:true,
            message:"save data in data base"
        })
    }catch{
        return res.json({
            sucess:false,
        })
    }
    
}

const chackData = async ()=>{
    try {
        const users = await userModule.find();

        const currentDate = new Date().toISOString().split('T')[0]; 

        users.forEach(user => {
            const userDate = new Date(user.date).toISOString().split('T')[0]; 
            console.log(userDate , currentDate);

            if (userDate === currentDate) {
                sendOtp(user.email , user.message);
                console.log("nanananan", user.email , user.message);
            }
        });


    } catch (error) {
        return console.log("yo");
    }
}

const sendOtp = (email , massage)=>{

    try{
        var transport = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user: process.env.GMAIL_USER,
                pass: process.env.PASSWORD
            }
        })

        const mail_configs = {
            form:'pdd2498@gmail.com',
            to: email,
            subject:'testing my app',
            text: massage,
        }

        transport.sendMail(mail_configs , (err,inf)=>{
            if(err){
                console.log("i am error" , err);
                return 
            }
            return
        })
}catch(err){
    return console.log(err);
}
}


const userData = async (req , res)=>{
    try{
        const data = await userModule.find();
        return res.json({
            data
        })
    }catch{
        return res.json({
            sucess: false,
        })
    }
}




const product = {
    message : addData,
    data : userData,
}

module.exports = product ;