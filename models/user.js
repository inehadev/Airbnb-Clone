const mongoose=require("mongoose");
const UserSchema = mongoose.Schema();
 UserSchema :{
   username :  {
    type: String
   }
   email:{

    type:String
   }
   passsword: {
    type:String
   }
 }

 const user = ("UserSchema" , "user");
 module.exports= user;