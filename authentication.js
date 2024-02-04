const express = require("express");
const user = require('./models/user');
const UserRouter = express.Router();
const bcrypt = require ('bcrypt');
const token = require('jsonwebtoken');

UserRouter.post('/register' , async(req,res)=>{
  try {
    const{username , email , password} = req.body;
    const existinguser = await user.findOne({email});
    if(existinguser){
        return res.status(400).json("email is already register try with another email");
    }
      
    const hashpassword = bcrypt.hash(password , 10);

     let User = new user ({
        username ,
        email,
        password:hashpassword
     })

     User = await User.save();
     res.json(User);
    
  } catch (error) {
    console.log(err);
  }

})


UserRouter.post('/login' , async(req,res)=>{
    try {
        const{email , password}=req.body;
        const existinguser = await user.findOne({email});
        if(!existinguser){
            return res.status(405).json(`email is  not register create your account first`);
        }
        else{
            return res.status(200).json(`user loginned successfully`);
        }
        const ismatch = bcrypt.compare(password , existinguser.password);
        if(!ismatch){
            res.json(`wrong password`);
        }

        const token =  jwt.sign({id: existinguser._id } , "securekey");
        res.json(...existinguser._doc , token); 
    } catch (error) {
       console.log(err);

    }
})

module.exports= UserRouter;