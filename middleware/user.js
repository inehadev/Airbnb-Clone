const express = require('express');
const jwt = require('jsonwebtoken');

  const userVerify =async (req,res,next)=>{
   
    try {
      const token = req.header("x-auth-token");
      if(!token){
        return res.status(400).json({error:"user m=not found"});

      } 
      
      const isverified = await jwt.verify(token , "Securekey"  );
      if(!isverified){
        return res.status(401).json({error:"unauthorised user"});
      }
      req.token= token;
      req.user = isverified.id;
      next();
    } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
        
    }
    
 }



 module.exports = userVerify;

