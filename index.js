const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./authentication");
const app = express();
const PORT = 5000;

 mongoose.connect("mongodb+srv://neha-:210280481@cluster0.ljuzc3b.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Database connected successfully");
}).catch((e)=>{
    console.log(e);
})
app.use(express.json());
app.use(UserRouter);
app.listen(PORT, ()=>{
    console.log(`the server is running at ${PORT}`);
})